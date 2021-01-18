FROM adoptopenjdk/openjdk11:jre-11.0.9.1_1-alpine

RUN adduser -D myuser
RUN mkdir -p /app/data/csv
COPY data/csv/* /app/data/csv/
COPY docker/run-app.sh /app/run-app.sh
COPY target/worldstat.jar /app/worldstat.jar
RUN chmod u+xr /app/run-app.sh
RUN chown -R myuser:myuser /app

USER myuser
WORKDIR /app
ENTRYPOINT ["/app/run-app.sh"]
