# NodeJS Observability with OpenTelemetry

Testing purpose application on how to instrumentate NodeJS services for Observability using OpenTelemetry SDK

Disclaimer: TypeScript must be installed!

### How to Run

```sh
npx ts-node --require ./instrumentation.ts app.ts
```

After that, the app will be exposed on <a>http://localhost:8080</a>, and metrics and traces will be disposed on the console.

- You may create a .env file with "PORT=" if you want to change the default running port!