const r = require("raylib");

function setup() {
    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;
    const numberOfPoints = 12;
    const degree = calcDegree(numberOfPoints);
    const radian = calcRadian(degree);

    // const angle = (2 * Math.PI) / numberOfPoints;

    r.SetTraceLogLevel(r.LOG_ERROR);
    r.InitWindow(width, height, "points around a circle");
    r.SetTargetFPS(60);

    return {
        width,
        height,
        radius,
        centerX,
        centerY,
        // angle,
        degree,
        radian,
        numberOfPoints,
    };
}

function calcDegree(numberOfPoints) {
    return 360 / numberOfPoints;
}

function calcRadian(degree) {
    return degree * (Math.PI / 180);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let i = 0; i < world.numberOfPoints; i++) {
        drawPoints(world, i);
    }

    r.EndDrawing();
}

function drawPoints(world, i) {
    const x = world.centerX + world.radius * Math.cos(world.radian * i);
    const y = world.centerY + world.radius * Math.sin(world.radian * i);
    r.DrawCircle(x, y, 2, r.WHITE);
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();
