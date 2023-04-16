## 아토믹 디자인을 활용한 디자인 시스템 도입기
https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/ 참고 
 
## 스터디 목적
- 아토믹 디자인을 활용한 재사용성 높은 파일구조에 대한 이해

- 협업에 용이한 프론트엔드 파일구조에 대한 이해

## src 파일 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┣ 📜Main_page.jsx
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂templates
 ┃ ┃ ┣ 📜Faq_board.jsx
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Home_board.jsx
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┣ 📜Project_board.jsx
 ┃ ┃ ┣ 📜README.md
 ┃ ┃ ┗ 📜Skill_board.jsx
 ┃ ┗ 📂UI
 ┃ ┃ ┣ 📂atom
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┗ 📜Link_box.jsx
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┣ 📜Home_button.jsx
 ┃ ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Layer_Header_Logo.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Menu_button.jsx
 ┃ ┃ ┃ ┣ 📂left_block
 ┃ ┃ ┃ ┃ ┣ 📜Bottom_section.jsx
 ┃ ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Top_section.jsx
 ┃ ┃ ┃ ┣ 📂project_board
 ┃ ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Project_ball.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Project_text.jsx
 ┃ ┃ ┃ ┃ ┗ 📜View_all_button.jsx
 ┃ ┃ ┃ ┣ 📂right_block
 ┃ ┃ ┃ ┃ ┣ 📜Bottom_section.jsx
 ┃ ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Top_section.jsx
 ┃ ┃ ┃ ┣ 📂skill_board
 ┃ ┃ ┃ ┃ ┣ 📜Info_text.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Stack.jsx
 ┃ ┃ ┃ ┣ 📜Pluss_button.jsx
 ┃ ┃ ┃ ┗ 📜README.md
 ┃ ┃ ┣ 📂molecules
 ┃ ┃ ┃ ┣ 📂faq_board
 ┃ ┃ ┃ ┃ ┗ 📜Faq_list.jsx
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┣ 📜Footer_info.jsx
 ┃ ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Link_box_list.jsx
 ┃ ┃ ┃ ┣ 📂main-info-container
 ┃ ┃ ┃ ┃ ┣ 📜Center_block.jsx
 ┃ ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Left_block.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Right_block.jsx
 ┃ ┃ ┃ ┣ 📂project_board
 ┃ ┃ ┃ ┃ ┗ 📜Project_ball_list.jsx
 ┃ ┃ ┃ ┣ 📂skill_board
 ┃ ┃ ┃ ┃ ┗ 📜Stack_wrap.jsx
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜README.md
 ┃ ┃ ┗ 📂organsim
 ┃ ┃ ┃ ┣ 📜Main_info_container.jsx
 ┃ ┃ ┃ ┗ 📜README.md
 ┣ 📂image
 ┃ ┣ 📜block.jpg
 ┃ ┗ 📜center_block_img.jpg
 ┣ 📂redux
 ┃ ┣ 📜reducer.jsx
 ┃ ┗ 📜store.jsx
 ┣ 📂router
 ┃ ┗ 📜index.jsx
 ┣ 📂styles
 ┃ ┣ 📜style.min.css
 ┃ ┗ 📜style.scss
 ┣ 📜App.jsx
 ┣ 📜index.jsx
 ┣ 📜reportWebVitals.jsx
 ┗ 📜setupTests.jsx
```
