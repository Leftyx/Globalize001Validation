(function (Application, $, undefined) {
    'use strict';

    Application.culture = '';
    Application.neutralCulture = '';

    Application.init = function () {

        Globalize.culture(this.culture);

        $.validator.methods.number = function (value, element) {
            return this.optional(element) || jQuery.isNumeric(Globalize.parseFloat(value));
        };

        $.validator.methods.date = function (value, element) {
            return (this.optional(element) || Globalize.parseDate(value));
        };

        jQuery.extend(jQuery.validator.methods, {
            range: function (value, element, param) {
                var val = Globalize.parseFloat(value);
                return this.optional(element) || (val >= param[0] && val <= param[1]);
            }
        });

        $.ajaxSetup({
            error: function (jqXHR, exception) {
                var errMsg = '';
                //if (jqXHR.status === 0) {
                //    //errMsg = 'Not connected.  Please verify network.';
                //}
                if (jqXHR.status === 404) {
                    errMsg = 'Requested page not found. [404]';
                } else if (jqXHR.status === 500) {
                    errMsg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    errMsg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    errMsg = 'Time out error.';
                } else if (exception === 'abort') {
                    errMsg = 'Ajax request aborted.';
                } else {
                    errMsg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                if ((errMsg) && ((errMsg) !== '')) {
                    alert(errMsg);
                }
            },
            timeout: 240000  // 240 sec default
        });

        $('#culture-en').on('click', function () {
            $.cookie('_culture', $(this).data('culture'));
            document.location.reload();
        });

        $('#culture-es').on('click', function () {
            $.cookie('_culture', $(this).data('culture'));
            document.location.reload();
        });

    };

}(window.Application = window.Application || {}, jQuery));