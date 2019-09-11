//https://gist.github.com/paulirish/626834
export default function() {
    if (/utm_/.test(location.search) && window.history.replaceState) {

        // thx @cowboy for the revised hash param magic.
        var oldUrl = location.href;
        var newUrl = oldUrl.replace(/\?([^#]*)/, function (_, search) {
            search = search.split('&').map(function (v) {
                return !/^utm_/.test(v) && v;
            }).filter(Boolean).join('&'); // omg filter(Boolean) so dope.
            return search ? '?' + search : '';
        });

        if (newUrl != oldUrl) {
            window.history.replaceState({}, '', newUrl);
        }

    }
    // just get rid of all params
    window.history.replaceState({}, '', '/');
}
