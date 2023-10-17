<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script defer type="module" src="./js/app.js"></script>
</head>

<body>
    <div class="container">
        <div class="board">
            <?php for ($c = 0; $c < 7; $c++) : ?>
                <div class="column">
                    <?php for ($r = 5; $r >= 0; $r--) : ?>
                        <button class="row" data-column="<?= $c ?>" data-row="<?= $r ?>" data-state="empty"></button>
                    <?php endfor; ?>
                </div>
            <?php endfor; ?>
        </div>
    </div>
    <dialog id="winner-modal">
        <p>Cette boîte de dialogue modale a un arrière-plan festif !</p>
        <button>Rejouer !</button>
    </dialog>
</body>

</html>