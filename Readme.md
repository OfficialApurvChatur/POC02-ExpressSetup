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
    participant Test
    participant Stage
    participant Prod
    
    Developer -->> Develop : push
    Develop -->> Test : push & merge
    Test -->> Stage : push & merge
    Stage -->> Prod : push & merge
    Prod -->> Develop : push & merge    
    Develop -->> Developer : pull    
```

#### 02.02. Project LLD
```mermaid
  flowchart LR
    User(("User"))
    subgraph Frontend["Frontend"]
      React["React + Typescript"]
    end
    subgraph Backend["Backend"]
      Node["Node + Typescript"]
    end

    User --> Frontend
    Frontend --> Backend
```


## Timeline History

### Sprint #01
  - Start - (Date: 18th Sept) - (Time: 02:48 AM)
