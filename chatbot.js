const products = [
    {
      title: "냄비",
      price: "5만원",
      description: "한 번 밖에 안 쓴 냄비 팝니다. 부모님이 독립할 때 주신 거예요!",
      img: "https://media.istockphoto.com/id/1791690530/ko/%EC%82%AC%EC%A7%84/%EB%83%84%EB%B9%84%EC%97%90%EC%84%9C-%EB%82%98%EC%98%A4%EB%8A%94-%EC%A6%9D%EA%B8%B0.webp?a=1&b=1&s=612x612&w=0&k=20&c=sqw8VcpNTks6L_T9rMkBkqyyEBpC6oqryKpZnHiKOSY=",
    },
    {
      title: "전기밥솥",
      price: "3만원",
      description: "잘 작동하는 전기밥솥입니다. 새로운 걸 사게 되어 내놓습니다.",
      img: "https://media.istockphoto.com/id/2004635695/ko/%EC%82%AC%EC%A7%84/chef-preparing-food-in-restaurant-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=5iZZuYqlyT-czRkO6re1J3CPc2ws8DDTh60tR8IZ1Hw=",
    },
    {
      title: "토스터기",
      price: "1만원",
      description: "자주 쓰지 않아 내놓습니다. 상태 양호합니다.",
      img: "https://media.istockphoto.com/id/1829058305/ko/%EC%82%AC%EC%A7%84/%EC%BD%98-%EB%B8%8C%EB%A6%AC%EC%8A%A4%ED%82%B7-%EB%B9%84%ED%94%84-%ED%95%B4%EC%8B%9C-%EC%98%A4%EB%AF%88%EB%A0%9B.webp?a=1&b=1&s=612x612&w=0&k=20&c=eY4N5qRBK9kg76OaZ8S1ykFhW9w8fa4MuckRWvWtcfc=",
    },
    {
        title: "오트",
        price: "측정불가",
        description: "굉장히 예쁨",
        img: "https://media.istockphoto.com/id/1885866215/ko/%EC%82%AC%EC%A7%84/veterinarian-examines-the-pet.webp?a=1&b=1&s=612x612&w=0&k=20&c=xz0v1wgIxXLX-iFgOZ6P0uMfXDt4eygKXKRyZ3OYJIg=",
      },
      {
        title: "라뗴",
        price: "측정불가",
        description: "굉장히 귀여움",
        img: "https://media.istockphoto.com/id/1853686056/ko/%EC%82%AC%EC%A7%84/%EC%A7%91%EC%97%90%EC%84%9C-%ED%9C%B4%EC%8B%9D%EC%9D%84-%EC%B7%A8%ED%95%98%EB%8A%94-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84.webp?a=1&b=1&s=612x612&w=0&k=20&c=GMuVD0FKi5cXjSsx0KTqbu0z6Cl0udXvq_0M0dEDYlE=",
      },
  ];
  
  // 카드 컨테이너 선택
  const cardContainer = document.getElementById("card-container");
  
  // 카드 생성 함수
  products.forEach((product) => {
    const card = `
      <div class="col">
        <div class="card h-100">
          <a href="https://spartacodingclub.kr" target="_blank">
            <img src="${product.img}" class="card-img-top img-fluid" alt="${product.title} 이미지" />
          </a>
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <p class="card-text">${product.description}</p>
          </div>
        </div>
      </div>
    `;
    cardContainer.innerHTML += card; // 카드 추가
  });