# **About team Seoulminer - mining codes**

Welcome to team Seoulminer! We are a five-member team based in Seoul, South Korea who have just completed their first project - an e-commerce website inspired by [Baemin stationary](https://brandstore.baemin.com/). Having  learned about the basics of web development, we had just two weeks (06/23/2023 ~ 07/07/2023) to put our knowledge to the test and build our first website from scratch. Our team consisted of our [front end](https://github.com/wecode-bootcamp-korea/47-1st-seoulminer-frontend) members [양회진](https://github.com/hjyang369)(project manager) and [이지원](https://github.com/jiwon614118), and [back end](https://github.com/wecode-bootcamp-korea/47-1st-seoulminer-backend) members [신동현](https://github.com/donghyeun02), [하준수](https://github.com/joonsooha123)(product manager), and [myself](https://github.com/lchoe24). As a back end member, we mainly focused on building a Node.js web app using the Express framework with our data managed in MySQL. It was due to each of our team members' hard work and dedication and the vast resources available online that we were able to output our final product. 

## A glimpse of our final product

![ezgif com-video-to-gif (1)](https://github.com/lchoe24/ecommerce-demo-website/assets/91116770/1ece1383-fb30-4d31-b2ae-ce741e4e63cd)

---

## PEFT Analysis - The essential building blocks of our e-commerce platform

### Product: What types of goods and services does our product provide? / 우리의 프로덕트가 커버하는 제품과 서비스는 어떤 종류의 것일까?

Our product's main service is eCommerce service: the selling and purchasing of goods through the Internet. The decision to purchase goods is not made through the direct interaction with the physical goods, but rather through the descriptions displayed on the web page. Thus, it is important to provide detailed information with the given limitations. Since it is not possible to receive the goods right after the purchase is complete, it is crucial to keep track of the necessary information for the delivery of the goods.

The goods themself are mostly fun, unique, hand-picked, non-mass-produced items. They come in affordable prices and are items that would be good to gift to a friend for fun purposes.
       
1. eCommerce를 영위: 네트워크 상에서 이루어지는 제품의 거래
    1. 실제로 제품을 보고 구매의사결정을 내리는 것이 아닌, 웹페이지에 게시된 정보를 바탕으로 구매의사결정을 내리게 됨. 따라서 제공 가능한 선에서 상품에 대한 상세 정보를 제공할 수 있어야 함.
    2. 구매의사 결정 및 지불이 끝났다고 해서 바로 상품을 수령할 수 있지 않으므로, 상품의 인도에 있어 필요한 정보가 잘 관리되어야 함.
2. 취급품목: 재미있는 소품
    1. 특이하고 기성품이 아닌 이벤트성 상품을 판매함.
    2. 가격대도 높은 편이 아님. 부담없이 구매할 수 있는 수준.
    3. 예컨대, 친구에게 장난으로 선물하면 좋을 물건.

### End-user: Who are the users of our product? / 우리의 프로덕트는 어떤 사람이 사용하게 될까? 

People who find interest in fun, collectible items would make up the majority of our customers. Accordingly, we assume that the general age of our users would be max 30 years of age. Noticeably, our type of e-commerce differs from everyday purchases such as grocery shopping, which means that the accessibility/comfort of the website can be sacrificed for the sake of highlighting other fun features.
    
재미있는 소품을 사용할 만한 사람들
1. 이 사람들은 특이한 물건을 사용하는 것을 / 특이한 선물을 하는 것을 좋아한다. 
2. 따라서 주 이용 연령층은 max 30대 정도로 추정된다.
3. 또한 일상적인 구매(식자재 구매와 같은)가 이뤄지는 것은 아니다.
    → 그렇기 때문에, 프로덕트의 접근성은 약간의 희생이 있어도 괜찮다.
   
### Feature: What features must our product have? / 우리의 프로덕트는 어떤 기능을 가지고 있어야할까?

We figured that an eCommerce platform must have at least the features listed below.
1. Creating an account: 

eCommerce를 운영하기 위해서는, 최소한 아래의 기능을 가지고 있어야 한다고 판단된다.

1. SignUp: 엔드유저를 인지하는 회원가입 기능.
    1. 어떤 사람이 어떤 품목을 얼마만큼 구매했는지를 알 수 있어야 한다. 이를 위해서는 해당하는 엔드유저를 특정할 수 있어야 하며, 회원가입을 통해 웹페이지 내의 활동에 대해 엔드유저를 특정할 수 있다.
    2. 아울러 특정 엔드유저의 주소지 등에 대한 정보도 관리해야 구매건에 대해 배송등의 사후처리도 수행할 수 있다.
    3. 따라서 회원가입 기능 및 엔드유저 정보 관리 기능은 이커머스에 있어 근간이 되는 기능이다.
2. SignIn: 엔드유저의 구매행위를 지원하고 분석하는 로그인 기능.
    1. 로그인 기능을 통해, 어떤 엔드유저가 웹페이지 상에서 어떤 행동을 취했는지 파악할 수 있다.
    2. 특히 eCommerce는 거래가 메인이 되는 만큼, 거래의 주체를 정확히 특정하고 파악할 수 있어야 한다. 이를 위해서는 로그인 기능은 필수다.
3. ProductView: 엔드유저에게 상품의 정보를 제공하는 상품조회 기능.
    1. 상품을 팔기 위해서는, 구매자가 해당 상품에 대한 정보를 제공받을 수 있어야 한다.
    2. 상품의 물리적 실체를 관찰하고 구매의사를 내릴 수 있는 것이 아니다 보니, 매체 안에서 제공할 수 있는 한도 안에서 최대한 상세한 정보를 전달해야 한다. 
    3. 상품의 리스트도 볼 수 있어야 하고, 개별상품에 대한 접근도 가능해야 한다.
4. Cart: 엔드유저가 구매의사가 있는 상품의 데이터를 저장하는 장바구니 기능.
    1. 엔드유저의 구매 편의성을 위해, 장바구니 기능을 제공해야 한다.
    2. 엔드유저는 로그인한 상태에서 본인이 구매하고자 하는 상품들을 담아두었다가 한번에 구매를 할 수 있어야 한다.
5. Order: 엔드유저의 구매이력을 확인, 확정하는 주문서 기능.
    1. 엔드유저가 구매한 상품에 대해, 판매자도 그 내역을 확인해야 상품의 배송 등의 사후절차를 진행할 수 있다.
    2. 아울러 관계법령 상 거래에 대한 정보는 일정 기간 보관되어야 한다.

### Tech: Our tools / 우리가 사용할 기술스택

- Tools
    - FE : JavaScript, React, SCSS
        - <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" /></div>
    - BE : JavaScript, Node.js, Express, MySQL
        - <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /></div>
        
- Management Tools


<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>


---

## Deeper Dive

---

## Additional links

- Notion Teamspace - Seoulminer
    
    [https://www.notion.so/Home-Seoulminer-6ec547cfd20d4b64949230fa66d3a34d?pvs=4](https://www.notion.so/Home-Seoulminer-6ec547cfd20d4b64949230fa66d3a34d?pvs=21)
    
- Trello - Ticket management
    
    [Trello](https://trello.com/b/UuPuThmi/teamseoulminer)
    
- dbdiagram - ERD
    
    [A Free Database Designer for Developers and Analysts](https://dbdiagram.io/d/6498e51a02bd1c4a5e0b0349)
    
- Postman - Seoulminer API
    
    [Seoulminer](https://documenter.getpostman.com/view/27927438/2s93zFXeiA)
    
- REACT
    
    [React – 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리](https://ko.legacy.reactjs.org/)
    

---

## Learning points 
- 장바구니, 주문결제 기능 개선: 현재는 장바구니를 통해 주문결제된 상품에 대해 데이터를 DB에서 hard delete 하는 방식으로 관리중인데, 이럴 경우 엔드유저가 장바구니에 담았던 상품에 대해 과거 이력을 조회할 수 없다. soft delete 하는 형식으로 바꿔서 데이터 이력을 남기는 방식으로 수정해 보고 싶다. 이럴 경우 엔드유저가 장바구니에 담았던 상품에 대한 데이터를 쌓을 수 있어 비즈니스 의사결정에 도움을 줄 수 있을 것이다.
- 상품검색 기능: 검색기능의 경우, 근본적으로 필터링의 일종이라고 한다. 이번 프로젝트 스코프에서는 검색기능이 포함되지 않았는데, 다음 번 프로젝트를 진행할 때는 검색기능도 스코프 안에 포함시켜 구현해보고 싶다.
- 상품리뷰 작성 / 게재 / 조회 기능: 상품 관련 정보 제공에 있어, 실제 사용해 본 사람의 언급만큼 귀중한 정보가 없을 것이다.
- 어드민 기능: 엔드유저에는 고객도 있지만, 어드민도 있다. 서비스의 관리 측면에서 필요한 기능을 고민해 보고 싶다.
- 아이디저장: 세션 활용하여 프론트에서 저장 할 수 있는 기능. 다음 프로젝트때는 구현하고 싶음.
- 상품목록 정렬 (최신순, 가격순) : 벡엔드 서버와 통신하여 서버에서 정해놓은 상품 정렬 목록을 불러와 UI 로
    
    그려주는 작업.
    
- 소셜로그인: 엔드유저 입장에서 간편한 회원가입, 로그인 절차를 경험하게 할 수 있음.
- 제대로 된 PG 이식: 실제 현업에서 사용하는 PG기능도 도전해 보고 싶다.

---

