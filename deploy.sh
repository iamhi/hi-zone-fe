#!/bin/bash

docker build -t localhost:5000/hi-zone-fe .

docker push localhost:5000/hi-zone-fe

kubectl delete -f k8s/*

kubectl apply -f k8s/*
