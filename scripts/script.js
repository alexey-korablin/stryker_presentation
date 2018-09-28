'use strict';

function apparently(string) {
    return string.length > 0 ?
    string.split(' ').map((e, i, a) => ['and', 'but'].includes(e) && a[i + 1] !== 'apparently'
    ? `${e} apparently` : e).join(' ') : '';
}

module.exports = apparently;