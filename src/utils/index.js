export function formatString (n) {
    n = n.tostring();
    return n[0] ? n : '0' + n;
}