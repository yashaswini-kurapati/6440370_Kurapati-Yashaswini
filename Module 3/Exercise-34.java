module-info.java in com.utils:
module com.utils {
    exports com.utils;
}

module-info.java in com.greetings:
module com.greetings {
    requires com.utils;
}