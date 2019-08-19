/**
 * "file Promise
 * "author soolucky
 */
(function (global) {

    function promise(processor) {

        this._status = 'pending';

        var context = this;

        if (!processor) {
            return;
        }

        processor(function (res) {
            context._resolve(res);
        }, function (err) {
            context._reject(err);
        });
    }

    Promise.prototype = {

        constructor: Promise,

        taskCallBack: function (value, processor, next) {
            var result = null;
            var normal = 1;
            try {
                result = processor(value);
            }catch (e) {
                normal = 0;
                result = err;
            }

            if (result instanceof Promise) {
                result.next(next);

                result.then(function (res) {
                    next._resolve(res);
                });

                result.catch(function (err) {
                    next._reject(err);
                });
                return;
            }

            if (normal === 1) {
                next._resolve(result);
            } else {
                next._reject(result);
            }
        },

        onReject: function (err) {
            this.next._reject(err);
        }
    };
})(window);
