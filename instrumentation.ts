import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';


const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter({}),
  metricReader: new PrometheusExporter({
    port: 9464,
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();