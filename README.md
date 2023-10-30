## Clean up the whole system and delete every image container etc:
```
docker system prune -a
```

## Build a dockerfile and create an image 
{execute the below command either from the directory where dockerfile is present, or replace . with path to dockerfile}
```
docker build -t <tag_name> .
```

## Run a container from an image
```
docker run -it --init -p <host_port>:<container_port> <image_name>
```