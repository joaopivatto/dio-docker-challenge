function star(fill) {
    var svgNS = "http://www.w3.org/2000/svg";
    var svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute("width", "24");
    svgElement.setAttribute("height", "24");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("fill", fill);
    svgElement.setAttribute("stroke-width", "2");
    svgElement.setAttribute("stroke-linecap", "round");
    svgElement.setAttribute("stroke-linejoin", "round");
    svgElement.classList.add("lucide", "lucide-star");
    const pathElement = document.createElementNS(svgNS, "path");
    pathElement.setAttribute("d", "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z");
    svgElement.appendChild(pathElement);

    return svgElement;
}

function menuIcon() {
    var svgNS = "http://www.w3.org/2000/svg";
    var svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute("width", "24");
    svgElement.setAttribute("height", "24");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("stroke", "currentColor");
    svgElement.setAttribute("stroke-width", "2");
    svgElement.setAttribute("stroke-linecap", "round");
    svgElement.setAttribute("stroke-linejoin", "round");
    svgElement.classList.add("lucide", "lucide-menu");

    var line1 = document.createElementNS(svgNS, "line");
    line1.setAttribute("x1", "4");
    line1.setAttribute("x2", "20");
    line1.setAttribute("y1", "12");
    line1.setAttribute("y2", "12");

    var line2 = document.createElementNS(svgNS, "line");
    line2.setAttribute("x1", "4");
    line2.setAttribute("x2", "20");
    line2.setAttribute("y1", "6");
    line2.setAttribute("y2", "6");

    var line3 = document.createElementNS(svgNS, "line");
    line3.setAttribute("x1", "4");
    line3.setAttribute("x2", "20");
    line3.setAttribute("y1", "18");
    line3.setAttribute("y2", "18");

    svgElement.appendChild(line1);
    svgElement.appendChild(line2);
    svgElement.appendChild(line3);

    return svgElement;
}

function x() {
    var svgNS = "http://www.w3.org/2000/svg";
    var svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute("width", "24");
    svgElement.setAttribute("height", "24");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("stroke-width", "2");
    svgElement.setAttribute("stroke-linecap", "round");
    svgElement.setAttribute("stroke-linejoin", "round");
    svgElement.classList.add("lucide", "lucide-x");
    var pathElement = document.createElementNS(svgNS, "path");
    pathElement.setAttribute("d", "M18 6 6 18");
    svgElement.appendChild(pathElement);

    pathElement = document.createElementNS(svgNS, "path");
    pathElement.setAttribute("d", "m6 6 12 12");
    svgElement.appendChild(pathElement);

    return svgElement;
}