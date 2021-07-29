const faq = document.querySelector('ul');

faq.addEventListener('click', e => {
  const question = e.target.closest('li');
  question.children[0].children[0].classList.toggle('question-active');
  question.children[0].children[1].classList.toggle('arrow-up');
  question.children[1].classList.toggle('answer-active');
})
