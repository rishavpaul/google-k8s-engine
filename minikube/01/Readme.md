# Minikube basics

## Docker setup

_could use a local docker image_

```bash
docker build -t paulrishav93/kubia .
docker push paulrishav93/kubia
```

## Initialize

```bash
kubectl apply -f deployment.yaml 
kubectl apply -f service.yaml
```

## Setup port forwarding

```bash
kubectl port-forward service/kubia-service 8080:80
```

### NodePort and TCP Layer Load Balancing

You are exposing a service using a NodePort, so there is no reverse proxy in place, but you directly connect to your Pod. When you expose a service using a NodePort, traffic is routed at the TCP level to the pods behind the service. Kubernetes uses iptables rules to direct incoming traffic to the available pods based on their health and availability.

Load balancing at the TCP layer means that the traffic distribution is not based on individual HTTP requests but rather on the TCP connections established to the service.

## Make requests

```bash
curl 127.0.0.1:8080
```

## Check logs

```bash
kubectl get pods
kubectl logs -f <pod-name>
```

## Get Info

```bash
kubectl describe pod
kubectl describe deployment kubia
kubectl describe service kubia-service
```

## Delete Service
```bash
kubectl delete deployment kubia
kubectl delete service kubia-service
```