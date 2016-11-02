// Using $provider.provider()
// call the provider function on the $provider service
// provider must define a $get function
// service is the object returned from the $get function
// configurable via the underlying provider  booksProvider this case
$provider.provider("books", function () {
    this.$get = function () {
        var appName = 'Book Logger';
        return {
            appName: appName
        };
    }
})