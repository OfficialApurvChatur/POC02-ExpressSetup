# POC 02 - Express Setup

## System Achitecture

### 01. High Level Design (HLD)
```mermaid
  sequenceDiagram
    actor User
    participant Backend
    participant Backend

    User -->> Frontend : ui req
    Frontend -->> Backend : api req
    Backend -->> Frontend : api res
    Frontend -->> User : ui res
```

### 02. Low Level Design (LLD)

#### 02.01. Environment Setup
```mermaid
  sequenceDiagram
    actor Developer
    participant Develop
    participant Feature/*
    participant Test
    participant Stage
    participant Prod
    
    Developer -->> Develop : push
    Develop -->> Feature/* : pull
    Feature/* -->> Develop : push
    Develop -->> Test : merge (develop)
    Test -->> Stage : merge (test)
    Stage -->> Prod : merge (stage)
    Prod -->> Develop : merge (prod) 
    Develop -->> Developer : pull    
```

#### 02.02. Project LLD
```mermaid
  flowchart LR
    User(("User"))

    subgraph Testing["Testing => Playwright"]
      subgraph Frontend["Frontend (stage)"]
        React["React + Typescript"]
      end
      subgraph Backend["Backend (stage)"]
        Node["Node + Typescript"]
        Express["Express"]
      end
    end

    User --> Frontend
    Frontend --> Backend
    Node --> Express
```

## Servers & DNS

### Backend
  - Development
    - Local: [http://localhost:8000/](http://localhost:8000/)
    - Live: []()
  - Testing
    - Local: [http://localhost:8000/](http://localhost:8000/)
    - Live: []()
  - Staging
    - Local: [http://localhost:8000/](http://localhost:8000/)
    - Live: []()
  - Production
    - Local: [http://localhost:8000/](http://localhost:8000/)
    - Live: []()

### Frontend
  - Development
    - Local: []()
    - Live: []()
  - Testing
    - Local: []()
    - Live: []()
  - Staging
    - Local: []()
    - Live: []()
  - Production
    - Local: []()
    - Live: []()

### Teesting

## Timeline History

### Sprint #01
  - Start - (Date: 18th Sept) - (Time: 02:48 AM)
