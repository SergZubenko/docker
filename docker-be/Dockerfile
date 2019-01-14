FROM openjdk:latest
COPY target/ .
ADD target/docker-be.jar docker-be.jar
EXPOSE 8087
ENTRYPOINT ["java","-jar","docker-be.jar"]