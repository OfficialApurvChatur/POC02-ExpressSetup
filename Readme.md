# POC 02 - Express Setup

## System Achitecture

### 01. High Level Design (HLD)
```mermaid
  sequenceDiagram
    actor User
    participant Frontend
    participant Backend
    participant Database

    User -->> Frontend : ui req
    Frontend -->> Backend : api req
    Backend -->> Database : store
    Database -->> Backend : retrieve
    Backend -->> Frontend : api res
    Frontend -->> User : ui res
```

### 02. Low Level Design (LLD)

#### 02.01. Git Branching & PR strategies LLD
```mermaid
  sequenceDiagram
    actor Developer
    participant Develop
    participant Feature/*
    participant Test
    participant Stage
    participant Prod
    
    Developer -->> Develop : switch
    Develop -->> Feature/* : create
    Feature/* -->> Feature/* : push
    Feature/* -->> Develop : merge (feature/*)
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
    Tester(("Tester"))

      subgraph Testing["Testing (stage)"]
        Playwright["Playwright + TS"]
      end
      subgraph Frontend["Frontend (stage)"]
        React["React + TS"]
        Shadcn["Shadcn"]
      end
      subgraph Backend["Backend (stage)"]
        Node["Node + TS"]
        Express["Express"]
      end
      subgraph Database["Database"]
        MongoDB["MongoDB"]
      end

    User --> Frontend
      React --> Shadcn
    Frontend --> Backend
      Node --> Express
    Backend --> Database
    Tester --> Testing
    Testing --> Backend
    Testing --> Frontend
```

#### 02.03. Servers & DNS LLD
```mermaid
  flowchart TB
    User(("User"))
    Internet["Internet"]

    subgraph Frontend
      direction TB
      NetlifyServer["Netlify Server"]
      NetlifyDNS["Netlify DNS"]
    end

    subgraph Backend
      direction TB
      RenderServer["Render Server"]
      RenderDNS["Render DNS"]
    end

    User --> Internet
    Internet --> Frontend
    Internet --> Backend
    NetlifyDNS <--> NetlifyServer
    RenderDNS <--> RenderServer
    
```

#### 02.04. Environment Setup LLD
```mermaid
  flowchart LR
    User(("User"))
    Project["Project"]
    subgraph Environment["Environment"]
      direction LR
      Develop["Develop"]
      Test["Test"]
      Stage["Stage"]
      Prod["Prod"]
    end
    Initialize["Initialize"]

    User --> Project
    Project --> Environment
    Environment --> Initialize
    
```

## Servers & DNS

### Backend
  - Development
    - Local: [http://localhost:8001/](http://localhost:8001/)
    - Live: [https://express-v01-backend-develop.onrender.com](https://express-v01-backend-develop.onrender.com)
  - Testing
    - Local: [http://localhost:8002/](http://localhost:8002/)
    - Live: [https://express-v01-backend-test.onrender.com](https://express-v01-backend-test.onrender.com)
  - Staging
    - Local: [http://localhost:8003/](http://localhost:8003/)
    - Live: [https://express-v01-backend-stage.onrender.com](https://express-v01-backend-stage.onrender.com)
  - Production
    - Local: [http://localhost:8004/](http://localhost:8004/)
    - Live: [https://express-v01-backend-prod.onrender.com](https://express-v01-backend-prod.onrender.com)

### Frontend
  - Development
    - Local: [http://localhost:3001](http://localhost:3001)
    - Live: [https://express-v01-frontend-develop.netlify.app](https://express-v01-frontend-develop.netlify.app)
  - Testing
    - Local: [http://localhost:3002](http://localhost:3002)
    - Live: [https://express-v01-frontend-test.netlify.app](https://express-v01-frontend-test.netlify.app)
  - Staging
    - Local: [http://localhost:3003](http://localhost:3003)
    - Live: [https://express-v01-frontend-stage.netlify.app](https://express-v01-frontend-stage.netlify.app)
  - Production
    - Local: [http://localhost:3004](http://localhost:3004)
    - Live: [https://express-v01-frontend-prod.netlify.app](https://express-v01-frontend-prod.netlify.app)

### Teesting
  - Report
    - Local: [http://localhost:9323](http://localhost:9323)
    - Live: []()

## Timeline History

### Sprint #01
  - Start - (Date: 18th Sept) - (Time: 02:48 AM)
