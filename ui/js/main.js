/**
 * Created by austinm on 11/8/17.
 */

$(document).ready(

    function main() {
        // console.log('In progress');

        $nav = $('.nav');
        $navButton = $('#navBtn');


        $navButton.on('click', function() {
            $nav.toggleClass('closed');
        })
    }

);