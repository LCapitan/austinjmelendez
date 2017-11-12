/**
 * Created by austinm on 11/8/17.
 */

$(document).ready(

    function main() {
        // console.log('In progress');
        var $navbutton = $('#navBtn');
        var $navbar = $('.nav');
        console.log($navbar);

        $navbutton.on('click', function() {
            var $this = $(this);
            $navbar.toggleClass('closed');
            $this.toggleClass('open');
            $this.toggleClass('icon-arrow-down2');
            $this.toggleClass('icon-arrow-up2');
        })
    }

);