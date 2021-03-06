'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '$GEng_Origin_Mid',
        documentation: 'Middle\nFile GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_TL',
        documentation: 'Top Left\nFile GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_TR',
        documentation: 'Top Right\nFile GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_BL',
        documentation: 'Bottom Left\nFile GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_BR',
        documentation: 'Bottom Right\nFile GEng_Sprite.au3'
    },
    {
        label: '$GEng_Debug_Pens',
        documentation: 'Use in _GEng_SetDebug($mode)\nFile GEng_System.au3'
    },
    {
        label: '$GEng_Debug_Sprites',
        documentation: 'Use in _GEng_SetDebug($mode)\nFile GEng_System.au3'
    },
    {
        label: '$GEng_Debug_Vectors',
        documentation: 'Use in _GEng_SetDebug($mode)\nFile GEng_System.au3'
    },
    {
        label: '$GEng_Debug_Collisions',
        documentation: 'Use in _GEng_SetDebug($mode)\nFile GEng_System.au3'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Enum
    i.detail = 'Global Enum of G-Engin'
}

module.exports = items