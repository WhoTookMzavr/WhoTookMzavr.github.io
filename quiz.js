// Правильные ответы (можно зашифровать или получать с сервера)
const correctAnswers = {
    q1: "c", 
    q2: "b", 
    q3: "c", 
    q4: "d", 
    q5: "b",
    // ... остальные вопросы
};

function checkQuiz() {
    let score = 0;
    const form = document.getElementById("quiz");

    for (const question in correctAnswers) {
        const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML = 
        `Ваш результат: ${score} из ${Object.keys(correctAnswers).length} правильных ответов.`;
}