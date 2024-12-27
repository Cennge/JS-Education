$(document).ready(function () {
    const symbols = ['🌟', '🎈', '🎨', '🎭', '🎪', '🎯', '🎲', '🎮', '🎵', '🎷'];
    const cards = [...symbols, ...symbols];
    let flippedCards = [];
    let matchedPairs = 0;
    let canFlip = false;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function initGame() {
        const shuffledCards = shuffleArray([...cards]);
        const $cardsContainer = $('.cards-container');
        $cardsContainer.empty();

        shuffledCards.forEach(symbol => {
            const card = $(`
                <div class="card">
                    <div class="card-front">${symbol}</div>
                    <div class="back"></div>
                </div>
            `);
            card.attr('data-symbol', symbol);
            $cardsContainer.append(card);
        });

        matchedPairs = 0;
        flippedCards = [];
        canFlip = true;
    }

    $('.cards-container').on('click', '.card', function() {
        if (!canFlip || $(this).hasClass('flipped') || $(this).hasClass('matched')) return;

        const card = $(this);
        card.addClass('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            const card1 = flippedCards[0];
            const card2 = flippedCards[1];

            if (card1.attr('data-symbol') === card2.attr('data-symbol')) {
                card1.addClass('matched');
                card2.addClass('matched');
                matchedPairs++;
                flippedCards = [];

                if (matchedPairs === symbols.length) {
                    alert('Поздравляем! Вы выиграли!');
                    $('#startBtn').text('START');
                    canFlip = false;
                }
            } else {
                canFlip = false;
                setTimeout(function() {
                    card1.removeClass('flipped');
                    card2.removeClass('flipped');
                    flippedCards = [];
                    canFlip = true;
                }, 1000);
            }
        }
    });

    $('#startBtn').click(function() {
        if ($(this).text() === 'START') {
            $(this).text('FINISH');
            initGame();
        } else {
            $(this).text('START');
            $('.card').addClass('flipped matched');
            canFlip = false;
        }
    });
});