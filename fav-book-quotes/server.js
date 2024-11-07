const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000

app.use(cors())

const beautifulQuotes = {
    
    //?H
    'heidi priebe': {
        'name': 'Heidi Priebe',
        'quoteName': 'As Long As There Is Love, There Will Be Grief',
        'type': 'quote',
        'quote': `The grief of time passing, of life moving on half-finished, of empty spaces that were once bursting with the laughter and energy of people we loved.
        As long as there is love there will be grief because grief is love's natural continuation.
        It shows up in the aisles of stores we onced frequented, in the half-finished bottle of wine we pour out, in the whiff of cologne we get two years after they've been gone.
        Grief is a giant neon sign, protruding through everything, pointing everywhere, broadcasting loudly, 'Love was here.' In the finer print, quitely, 'Love still is.'`
    },

    'henri nouwen': {
        'name': 'Henri Nouwen',
        'quoteName': 'unavailable',
        'type': 'quote',
        'quote': `You have an idea what the new country looks like. Still, you are very much at home, although not truly at peace, in the old country. You know the ways of the old country, it’s joys and pains, its happy and sad moments. You have spent most of your days there. Even though you know that you have not found there what your heart most desires, you remain quite attached to it. It has become part of your very bones.

        Now you have come to realize that you must leave it and enter the new country, where your Beloved dwells. You know that what helped and guided you in the old country no longer works, but what else do you have to go by? You are being asked to trust that you will find what you need in the new country. That requires the death of what has become precious to you: influence, success, yes, even affection and praise.

        Trust is so hard, since you have nothing to fall back on. Still, trust is what is essential. The new country is where you are called to go, and the only way to go there is naked and vulnerable.

        It seems that you keep crossing and recrossing the border. For a while you experience a real joy in the new country. But then you feel afraid and start longing again for all you left behind, so you go back to the old country. To your dismay, you discover that the old country has lost its charm. Risk a few more steps into the new country, trusting that each time you enter it, you will feel more comfortable and be able to stay longer.`,
    },

    //? K
    'kimbra': {
        'name': 'Kimbra',
        'quoteName': 'unavailable',
        'type': 'poem',
        'quote':
            `I come to know my voice through sounding.

        I come to see my image through looking.

        I come to understand my words through writing them.

        I come to feel my emotions through feeling.

        It seems quite obvious doesn’t it? But I have to confess I find so many ways to procrastinate from doing the above.

        Sometimes I don’t want to expand. Sometimes I want to stay small.
        Sometimes I want to stay fragmented. I’m scared of so much wholeness…. and of what it would ask of me…. What it would reveal to me or invite me to include. Who it would tell me to bring home. How it would show me all the sides of myself that I have othered. Exiled. Marginalized.
        Sometimes I don’t want to love in that way.
        To be that big and caring.`
    },

    //? S
    'socrates': {
        'name': 'Socrates',
        'quoteName': 'unavailable',
        'type': 'quote',
        'quote': `The unexamined life is not worth living.`
    },

    //? T
    'tori morrison': {
        'name': 'Tori Morrison',
        'quoteName': 'Tar Baby',
        'type': 'book',
        'quote': `The world will always be there-while you sleep it will be there-when you wake it will be there as well. So you can sleep and there is a reason to wake. A dead hydrangea is as intricate and lovely as one in bloom. Bleak sky is as seductive as sunshine, miniature orange trees without blossom or fruit are not defective; they are that. So the windows of the greenhouse can be opened and the weather let in. The latch on the door can be left unhooked, the muslin removed, for the soldier ants are beautiful too and whatever they do will be part of it.`
    },

    //? U
    'unknown': {
        'name': 'unkown',
        'quoteName': 'unknown',
        'type': 'unknown',
        'quote': 'unknown',
    },

    //? W
    'william shakespeare': {
        'name': 'William Shakespeare',
        'quoteName': 'As You Like It',
        'type': 'monologue',
        'quote': `All the world’s a stage,
                  And all the men and women merely players;
                  They have their exits and their entrances,
                  And one man in his time plays many parts,
                  His acts being seven ages. At first, the infant,
                  Mewling and puking in the nurse’s arms.
                  Then the whining schoolboy, with his satchel
                  And shining morning face, creeping like snail
                  Unwillingly to school. And then the lover,
                  Sighing like furnace, with a woeful ballad
                  Made to his mistress’ eyebrow. Then a soldier,
                  Full of strange oaths and bearded like the pard,
                  Jealous in honor, sudden and quick in quarrel,
                  Seeking the bubble reputation
                  Even in the cannon’s mouth. And then the justice,
                  In fair round belly with good capon lined,
                  With eyes severe and beard of formal cut,
                  Full of wise saws and modern instances;
                  And so he plays his part. The sixth age shifts
                  Into the lean and slippered pantaloon,
                  With spectacles on nose and pouch on side;
                  His youthful hose, well saved, a world too wide
                  For his shrunk shank, and his big manly voice,
                  Turning again toward childish treble, pipes
                  And whistles in his sound. Last scene of all,
                  That ends this strange eventful history,
                  Is second childishness and mere oblivion,
                  Sans teeth, sans eyes, sans taste, sans everything.`
    },
} //END OF BEAUTIFUL QUOTES OBJECT


// get HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//for API's
app.get('/api/:name', (req, res) => {
    const quote = req.params.name.toLowerCase() //our object in the beautifulQuotes obj put to lowercase

    console.log(beautifulQuotes[quote].quote)

    if (beautifulQuotes[quote]) {
        res.json(beautifulQuotes[quote])
    } else {
        res.json(beautifulQuotes['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}.`)
})