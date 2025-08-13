# Backend Demo API

A minimal Go API using Gin framework for demonstrating AI Engineering principles.

## Setup

```bash
cd demos/backend
go mod download
go run main.go
```

## Endpoints

- `GET /successEnablersFramework` - Returns all framework data
- `GET /chatWithFramework?query=<your_query>` - Interactive chat interface

## Testing

The API runs on http://localhost:8080

Example requests:
```bash
curl http://localhost:8080/successEnablersFramework
curl "http://localhost:8080/chatWithFramework?query=workplace%20accommodations"
```