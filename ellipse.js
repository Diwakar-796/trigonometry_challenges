const r = require("raylib");

function setup() {
    const width = 800;
    const height = 600;
    const hr = 300;
    const vr = 200;
    const center = {
        x: width / 2,
        y: height / 2,
    };

    r.SetTraceLogLevel(r.LOG_ERROR);
    r.InitWindow(width, height, "Ellipse");
    r.SetTargetFPS(60);

    return {
        width,
        height,
        hr,
        vr,
        center,
    };
}

function calcRadian(degree) {
    return degree * (Math.PI / 180);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let i = 0; i <= 360; i += 0.25) {
        const radian = calcRadian(i);
        const x = world.center.x + world.hr * Math.cos(radian);
        const y = world.center.y + world.vr * Math.sin(radian);
        r.DrawCircle(x, y, 1, r.WHITE);
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
