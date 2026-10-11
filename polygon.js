const r = require("raylib");

function setup() {
    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;
    const numberOfSides = 7;
    const degree = calcDegree(numberOfSides);
    const radian = calcRadian(degree);

    r.SetTraceLogLevel(r.LOG_ERROR);
    r.InitWindow(width, height, "points around a circle");
    r.SetTargetFPS(60);

    return {
        width,
        height,
        radius,
        centerX,
        centerY,
        degree,
        radian,
        numberOfSides,
    };
}

function calcDegree(numberOfSides) {
    return 360 / numberOfSides;
}

function calcRadian(degree) {
    return degree * (Math.PI / 180);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let i = 0; i < world.numberOfSides; i++) {
        drawPoints(world, i);
    }

    r.EndDrawing();
}

function drawPoints(world, i) {
    const x = world.centerX + world.radius * Math.cos(world.radian * i);
    const y = world.centerY + world.radius * Math.sin(world.radian * i);
    const x1 = world.centerX + world.radius * Math.cos(world.radian * (i - 1));
    const y1 = world.centerY + world.radius * Math.sin(world.radian * (i - 1));
    r.DrawLine(x, y, x1, y1, r.WHITE);
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
