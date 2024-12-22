# Basic Docker Commands for Full Stack Developers

As a full-stack developer, Docker can significantly streamline your development workflow. Below are some essential Docker commands that every developer should be familiar with:

## 1. **docker --version**

To check the installed Docker version.

```bash
docker --version
```

_Displays the version of Docker installed on your system._

## 2. **docker build**

To build a Docker image from a Dockerfile.

```bash
docker build -t <image-name>:<tag> <path>
```

-   `-t <image-name>:<tag>`: Specifies the name and tag of the image.
-   `<path>`: Path to the directory containing the Dockerfile.

_Example:_

```bash
docker build -t my-app:v1 .
```

_Builds the image from the current directory using the Dockerfile._

## 3. **docker pull**

To pull an image from Docker Hub or any other registry.

```bash
docker pull <image-name>:<tag>
```

_Downloads an image (e.g., Node.js or MySQL) from the registry._

_Example:_

```bash
docker pull node:16
```

_Pulls the official Node.js image, version 16._

## 4. **docker images**

To list all the Docker images on your local machine.

```bash
docker images
```

_Displays a list of all images with their names, tags, and sizes._

## 5. **docker ps**

To list all the running containers.

```bash
docker ps
```

_Displays a list of running containers with their container IDs, names, status, and ports._

## 6. **docker ps -a**

To list all containers, including stopped ones.

```bash
docker ps -a
```

_Displays a list of all containers (running and stopped)._

## 7. **docker run**

To run a new container from an image.

```bash
docker run -d -p <host-port>:<container-port> --name <container-name> <image-name>:<tag>
```

-   `-d`: Run in detached mode (in the background).
-   `-p <host-port>:<container-port>`: Map ports between the host and the container.
-   `--name <container-name>`: Assign a custom name to the container.

_Example:_

```bash
docker run -d -p 3000:3000 --name my-app-container my-app:v1
```

_Runs a container from the image `my-app:v1` and maps port 3000 of the host to port 3000 of the container._

## 8. **docker exec**

To execute a command in a running container.

```bash
docker exec -it <container-name-or-id> <command>
```

-   `-it`: Interactive terminal, useful for opening a shell inside the container.

_Example:_

```bash
docker exec -it my-app-container bash
```

_Opens a bash shell inside the running container `my-app-container`._

## 9. **docker stop**

To stop a running container.

```bash
docker stop <container-name-or-id>
```

_Stops the specified container._

_Example:_

```bash
docker stop my-app-container
```

_Stops the container `my-app-container`._

## 10. **docker start**

To start a stopped container.

```bash
docker start <container-name-or-id>
```

_Starts a stopped container._

_Example:_

```bash
docker start my-app-container
```

_Starts the container `my-app-container`._

## 11. **docker restart**

To restart a running or stopped container.

```bash
docker restart <container-name-or-id>
```

_Restarts the specified container._

_Example:_

```bash
docker restart my-app-container
```

_Restarts the container `my-app-container`._

## 12. **docker rm**

To remove a stopped container.

```bash
docker rm <container-name-or-id>
```

_Removes the specified container._

_Example:_

```bash
docker rm my-app-container
```

_Removes the container `my-app-container` (it must be stopped)._

## 13. **docker rmi**

To remove a Docker image.

```bash
docker rmi <image-name>:<tag>
```

_Removes the specified image._

_Example:_

```bash
docker rmi my-app:v1
```

_Removes the image `my-app:v1`._

## 14. **docker logs**

To view the logs of a running or stopped container.

```bash
docker logs <container-name-or-id>
```

_Displays the logs from the specified container._

_Example:_

```bash
docker logs my-app-container
```

_Shows the logs from the `my-app-container`._

## 15. **docker-compose up**

To start containers defined in a `docker-compose.yml` file.

```bash
docker-compose up
```

_Builds, (re)creates, starts, and attaches to containers defined in `docker-compose.yml`._

_Example:_

```bash
docker-compose up -d
```

_Runs in detached mode._

## 16. **docker-compose down**

To stop and remove containers defined in a `docker-compose.yml` file.

```bash
docker-compose down
```

_Stops and removes the containers, networks, and volumes created by `docker-compose up`._

## 17. **docker network ls**

To list all Docker networks.

```bash
docker network ls
```

_Lists all networks available in Docker._

## 18. **docker volume ls**

To list all Docker volumes.

```bash
docker volume ls
```

_Lists all volumes in Docker._

## 19. **docker system prune**

To remove unused data (containers, images, volumes, and networks).

```bash
docker system prune
```

_Cleans up unused Docker resources._

_Example:_

```bash
docker system prune -a
```

_Removes all unused containers, networks, and images (including dangling images)._
