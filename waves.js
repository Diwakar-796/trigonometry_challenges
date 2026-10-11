const r = require("raylib");

function setup() {
    const width = 600;
    const height = 400;
    const amplitude = 100;
    const origin = {
        x: 50,
        y: 200,
    };

    r.SetTraceLogLevel(r.LOG_ERROR);
    r.InitWindow(width, height, "Waves");
    r.SetTargetFPS(60);

    return {
        width,
        height,
        origin,
        amplitude,
    };
}

function calcRadian(degree) {
    return degree * (Math.PI / 180);
}

function drawSinWave(world, radian, i) {
    const x = world.origin.x + i;
    const y = world.origin.y - world.amplitude * Math.sin(radian);
    r.DrawCircle(x, y, 1, r.RED);
}

function drawCosWave(world, radian, i) {
    const x = world.origin.x + i;
    const y = world.origin.y - world.amplitude * Math.cos(radian);
    r.DrawCircle(x, y, 1, r.BLUE);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawLine(world);
    drawText(world);

    for (let i = 0; i <= 360; i++) {
        const radian = calcRadian(i);

        drawSinWave(world, radian, i);
        drawCosWave(world, radian, i);
    }

    r.EndDrawing();
}

function drawLine(world) {
    r.DrawLine(0, world.origin.y, world.width, world.origin.y, r.BLACK);
    r.DrawLine(world.origin.x, 0, world.origin.x, world.height, r.BLACK);

    r.DrawLine(0, world.amplitude, world.width, world.amplitude, r.BLACK);
    r.DrawLine(
        0,
        world.amplitude * 3,
        world.width,
        world.amplitude * 3,
        r.BLACK,
    );
}

function drawText(world) {
    r.DrawText("0", world.origin.x - 15, world.origin.y - 15, 15, r.BLACK);
    r.DrawText("1", world.origin.x - 15, world.amplitude - 15, 15, r.BLACK);
    r.DrawText(
        "-1",
        world.origin.x - 15,
        world.amplitude * 3 - 15,
        15,
        r.BLACK,
    );
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
