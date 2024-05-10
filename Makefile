GOHOSTOS:=$(shell go env GOHOSTOS)
GOPATH:=$(shell go env GOPATH)
VERSION=$(shell git describe --tags --always)
BRANCH=$(shell git rev-parse --abbrev-ref HEAD)


.PHONY: build build-docker

build:
	npm config set registry https://registry.npmmirror.com && npm ci
	npm run build

build-docker: build
	docker build -t registry.cn-shenzhen.aliyuncs.com/qjwwy-pro/coc-doc:self-$(BRANCH)-$(VERSION) -f ./Dockerfile --build-arg name=app .
	docker push registry.cn-shenzhen.aliyuncs.com/qjwwy-pro/coc-doc:self-$(BRANCH)-$(VERSION)