/** Automatically set newly created users to verified */
onRecordBeforeCreateRequest((e) => {
    // skip if admin 
    if (e.httpContext.get("admin")) {
        return;
    }

    e.record.set("verified", true)
}, "users")