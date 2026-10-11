const r = require("raylib");

function setup() {
    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;
    const numberOfPoints = 12;
    const angle = Math.PI / (numberOfPoints / 2);

    r.SetTraceLogLevel(r.LOG_ERROR);
    r.InitWindow(width, height, "points around a circle");
    r.SetTargetFPS(60);

    return {
        width,
        height,
        radius,
        centerX,
        centerY,
        angle,
        numberOfPoints,
    };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let i = 0; i < world.numberOfPoints; i++) {
        const x = world.centerX + world.radius * Math.cos(world.angle * i);
        const y = world.centerY + world.radius * Math.sin(world.angle * i);
        r.DrawCircle(x, y, 2, r.WHITE);
    }

    r.EndDrawing();
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
