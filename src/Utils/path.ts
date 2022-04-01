export default class Path {
    d: string;
    static pathCommand =
        /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi;
    static tCommand =
        /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi;
    static pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi;
    constructor(d: string) {
        this.d = d;
    }

    getTotalLength(): number {
        return this.getLength(this.d);
    }

    getPointAtLength(length: number): {
        x: number;
        y: number;
        m: { x: number; y: number };
        n: { x: number; y: number };
        start: { x: number; y: number };
        end: { x: number; y: number };
        alpha: number;
    } {
        return this.getLength(this.d, length);
    }

    private getLength(d: string, length?: number) {
        const path = this.path2curve(d);
        var x,
            y,
            p,
            l,
            sp = "",
            point,
            len = 0;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = +p[1];
                y = +p[2];
            } else {
                l = getPointAtSegmentLength(
                    x,
                    y,
                    p[1],
                    p[2],
                    p[3],
                    p[4],
                    p[5],
                    p[6]
                );
                if (typeof length !== "undefined" && len + l > length) {
                    point = getPointAtSegmentLength(
                        x,
                        y,
                        p[1],
                        p[2],
                        p[3],
                        p[4],
                        p[5],
                        p[6],
                        length - len
                    );
                    return point;
                }
                len += l;
                x = +p[5];
                y = +p[6];
            }
            sp += p.shift() + p;
        }
        point =
            typeof length == "undefined"
                ? len
                : findDotsAtSegment(
                      x,
                      y,
                      p[0],
                      p[1],
                      p[2],
                      p[3],
                      p[4],
                      p[5],
                      1
                  );
        return point;
    }

    private path2curve(path: string) {
        let p = this.pathToAbsolute(path),
            attrs = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null,
            },
            processPath = function (path, d, pcom) {
                var nx, ny;
                if (!path) {
                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);
                switch (path[0]) {
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = ["C"].concat(
                            a2c.apply(0, [d.x, d.y].concat(path.slice(1)))
                        );
                        break;
                    case "S":
                        if (pcom == "C" || pcom == "S") {
                            // In "S" case we have to take into account, if the previous command is C/S.
                            nx = d.x * 2 - d.bx; // And reflect the previous
                            ny = d.y * 2 - d.by; // command's control point relative to the current point.
                        } else {
                            // or some else or nothing
                            nx = d.x;
                            ny = d.y;
                        }
                        path = ["C", nx, ny].concat(path.slice(1));
                        break;
                    case "T":
                        if (pcom == "Q" || pcom == "T") {
                            // In "T" case we have to take into account, if the previous command is Q/T.
                            d.qx = d.x * 2 - d.qx; // And make a reflection similar
                            d.qy = d.y * 2 - d.qy; // to case "S".
                        } else {
                            // or something else or nothing
                            d.qx = d.x;
                            d.qy = d.y;
                        }
                        path = ["C"].concat(
                            q2c(d.x, d.y, d.qx, d.qy, path[1], path[2])
                        );
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = ["C"].concat(
                            q2c(d.x, d.y, path[1], path[2], path[3], path[4])
                        );
                        break;
                    case "L":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            },
            fixArc = function (pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while (pi.length) {
                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = Math.max(p.length);
                }
            },
            pcoms1 = [], // path commands of original path p
            pcoms2 = [], // path commands of original path p2
            pfirst = "", // temporary holder for original path command
            pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = p.length; i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") {
                // C is not saved yet, because it may be result of conversion
                pcoms1[i] = pfirst; // Save current path command
                i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            let seg = p[i],
                seglen = seg.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = parseFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = parseFloat(seg[seglen - 3]) || attrs.y;
        }
        return p;
    }

    private pathToAbsolute(pathString) {
        const pathArray = this.parsePathString(pathString);
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push((r = []));
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (let j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        return res;
    }

    private parsePathString(d: string) {
        if (!d) {
            return null;
        }
        var paramCounts = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0,
            },
            data = [];
        if (!data.length) {
            d.replace(Path.pathCommand, (a, b, c) => {
                var params = [],
                    name = b.toLowerCase();
                c.replace(Path.pathValues, function (a, b) {
                    b && params.push(+b);
                    return a;
                });
                if (name == "m" && params.length > 2) {
                    data.push([b].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "o" && params.length == 1) {
                    data.push([b, params[0]]);
                }
                if (name == "r") {
                    data.push([b].concat(params));
                } else
                    while (params.length >= paramCounts[name]) {
                        data.push(
                            [b].concat(params.splice(0, paramCounts[name]))
                        );
                        if (!paramCounts[name]) {
                            break;
                        }
                    }
                return a;
            });
        }
        return data;
    }
}

const PI = Math.PI;
function l2c(x1, y1, x2, y2) {
    return [x1, y1, x2, y2, x2, y2];
}
function q2c(x1, y1, ax, ay, x2, y2) {
    var _13 = 1 / 3,
        _23 = 2 / 3;
    return [
        _13 * x1 + _23 * ax,
        _13 * y1 + _23 * ay,
        _13 * x2 + _23 * ax,
        _13 * y2 + _23 * ay,
        x2,
        y2,
    ];
}
function a2c(
    x1,
    y1,
    rx,
    ry,
    angle,
    large_arc_flag,
    sweep_flag,
    x2,
    y2,
    recursive
) {
    // for more information of where this math came from visit:
    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
    var _120 = (PI * 120) / 180,
        rad = (PI / 180) * (+angle || 0),
        res = [],
        xy,
        rotate = function (x, y, rad) {
            var X = x * Math.cos(rad) - y * Math.sin(rad),
                Y = x * Math.sin(rad) + y * Math.cos(rad);
            return { x: X, y: Y };
        };
    if (!rx || !ry) {
        return [x1, y1, x2, y2, x2, y2];
    }
    if (!recursive) {
        xy = rotate(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = rotate(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        var x = (x1 - x2) / 2,
            y = (y1 - y2) / 2;
        var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
        if (h > 1) {
            h = Math.sqrt(h);
            rx = h * rx;
            ry = h * ry;
        }
        var rx2 = rx * rx,
            ry2 = ry * ry,
            k =
                (large_arc_flag == sweep_flag ? -1 : 1) *
                Math.sqrt(
                    Math.abs(
                        (rx2 * ry2 - rx2 * y * y - ry2 * x * x) /
                            (rx2 * y * y + ry2 * x * x)
                    )
                ),
            cx = (k * rx * y) / ry + (x1 + x2) / 2,
            cy = (k * -ry * x) / rx + (y1 + y2) / 2,
            f1 = Math.asin(+((y1 - cy) / ry).toFixed(9)),
            f2 = Math.asin(+((y2 - cy) / ry).toFixed(9));

        f1 = x1 < cx ? PI - f1 : f1;
        f2 = x2 < cx ? PI - f2 : f2;
        f1 < 0 && (f1 = PI * 2 + f1);
        f2 < 0 && (f2 = PI * 2 + f2);
        if (sweep_flag && f1 > f2) {
            f1 = f1 - PI * 2;
        }
        if (!sweep_flag && f2 > f1) {
            f2 = f2 - PI * 2;
        }
    } else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
    }
    var df = f2 - f1;
    if (Math.abs(df) > _120) {
        var f2old = f2,
            x2old = x2,
            y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * Math.cos(f2);
        y2 = cy + ry * Math.sin(f2);
        res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [
            f2,
            f2old,
            cx,
            cy,
        ]);
    }
    df = f2 - f1;
    var c1 = Math.cos(f1),
        s1 = Math.sin(f1),
        c2 = Math.cos(f2),
        s2 = Math.sin(f2),
        t = Math.tan(df / 4),
        hx = (4 / 3) * rx * t,
        hy = (4 / 3) * ry * t,
        m1 = [x1, y1],
        m2 = [x1 + hx * s1, y1 - hy * c1],
        m3 = [x2 + hx * s2, y2 - hy * c2],
        m4 = [x2, y2];
    m2[0] = 2 * m1[0] - m2[0];
    m2[1] = 2 * m1[1] - m2[1];
    if (recursive) {
        return [m2, m3, m4].concat(res);
    } else {
        res = [m2, m3, m4].concat(res).join().split(",");
        var newres = [];
        for (var i = 0, ii = res.length; i < ii; i++) {
            newres[i] =
                i % 2
                    ? rotate(res[i - 1], res[i], rad).y
                    : rotate(res[i], res[i + 1], rad).x;
        }
        return newres;
    }
}

function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
    var t1 = 1 - t,
        t13 = Math.pow(t1, 3),
        t12 = Math.pow(t1, 2),
        t2 = t * t,
        t3 = t2 * t,
        x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
        y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
        mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
        my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
        nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
        ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
        ax = t1 * p1x + t * c1x,
        ay = t1 * p1y + t * c1y,
        cx = t1 * c2x + t * p2x,
        cy = t1 * c2y + t * p2y,
        alpha = 90 - (Math.atan2(mx - nx, my - ny) * 180) / PI;
    // (mx > nx || my < ny) && (alpha += 180);
    return {
        x: x,
        y: y,
        m: { x: mx, y: my },
        n: { x: nx, y: ny },
        start: { x: ax, y: ay },
        end: { x: cx, y: cy },
        alpha: alpha,
    };
}

function getPointAtSegmentLength(
    p1x,
    p1y,
    c1x,
    c1y,
    c2x,
    c2y,
    p2x,
    p2y,
    length?: number
) {
    if (length === undefined) {
        return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
    } else {
        return findDotsAtSegment(
            p1x,
            p1y,
            c1x,
            c1y,
            c2x,
            c2y,
            p2x,
            p2y,
            getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length)
        );
    }
}

function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z = 1) {
    z = z > 1 ? 1 : z < 0 ? 0 : z;
    var z2 = z / 2,
        n = 12,
        Tvalues = [
            -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699,
            -0.9041, 0.9041, -0.9816, 0.9816,
        ],
        Cvalues = [
            0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
            0.1069, 0.1069, 0.0472, 0.0472,
        ],
        sum = 0;
    for (var i = 0; i < n; i++) {
        var ct = z2 * Tvalues[i] + z2,
            xbase = base3(ct, x1, x2, x3, x4),
            ybase = base3(ct, y1, y2, y3, y4),
            comb = xbase * xbase + ybase * ybase;
        sum += Cvalues[i] * Math.sqrt(comb);
    }
    return z2 * sum;
}

function base3(t, p1, p2, p3, p4) {
    var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
        t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
    return t * t2 - 3 * p1 + 3 * p2;
}

function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
    if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
        return;
    }
    var t = 1,
        step = t / 2,
        t2 = t - step,
        l,
        e = 0.01;
    l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
    while (Math.abs(l - ll) > e) {
        step /= 2;
        t2 += (l < ll ? 1 : -1) * step;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
    }
    return t2;
}
function O(val) {
    return +(+val).toFixed(3);
}
