FROM openjdk:17
WORKDIR /

COPY target/app.jar /

CMD ["java", "-cp", "app.jar", "clojure.main", "-m", "backend.main"]