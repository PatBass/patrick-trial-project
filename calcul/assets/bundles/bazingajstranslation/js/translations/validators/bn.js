(function (t) {
// bn
t.add("fos_user.username.already_used", "\u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u0995\u09be\u09b0\u09c0\u09b0 \u09a8\u09be\u09ae\u099f\u09bf \u0987\u09a4\u09bf\u09ae\u09a7\u09cd\u09af\u09c7 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7", "validators", "bn");
t.add("fos_user.username.blank", "\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9 \u0995\u09b0\u09c7 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u0995\u09be\u09b0\u09c0\u09b0 \u09a8\u09be\u09ae \u09b2\u09bf\u0996\u09c1\u09a8", "validators", "bn");
t.add("fos_user.username.short", "\u09a8\u09be\u09ae\u099f\u09bf \u09a5\u09c1\u09ac\u0987 \u099b\u09cb\u099f", "validators", "bn");
t.add("fos_user.username.long", "\u09a8\u09be\u09ae\u099f\u09bf \u09a5\u09c1\u09ac\u0987 \u09ac\u09dc", "validators", "bn");
t.add("fos_user.email.already_used", "\u0987-\u09ae\u09c7\u0987\u09b2 \u099f\u09bf \u0987\u09a4\u09bf\u09ae\u09a7\u09cd\u09af\u09c7 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7", "validators", "bn");
t.add("fos_user.email.blank", "\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9 \u0995\u09b0\u09c7 \u098f\u0995\u099f\u09bf \u0987-\u09ae\u09c7\u0987\u09b2 \u09b2\u09bf\u0996\u09c1\u09a8", "validators", "bn");
t.add("fos_user.email.short", "\u0987-\u09ae\u09c7\u0987\u09b2 \u099f\u09bf \u09a5\u09c1\u09ac\u0987 \u099b\u09cb\u099f", "validators", "bn");
t.add("fos_user.email.long", "\u0987-\u09ae\u09c7\u0987\u09b2 \u099f\u09bf \u09a5\u09c1\u09ac\u0987 \u09ac\u09dc", "validators", "bn");
t.add("fos_user.email.invalid", "\u0987-\u09ae\u09c7\u0987\u09b2 \u099f\u09bf \u09b8\u09a0\u09bf\u0995 \u09a8\u09df", "validators", "bn");
t.add("fos_user.password.blank", "\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9 \u0995\u09b0\u09c7 \u09aa\u09be\u09b8\u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a1 \u09b2\u09bf\u0996\u09c1\u09a8", "validators", "bn");
t.add("fos_user.password.short", "\u09aa\u09be\u09b8\u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a1 \u099f\u09bf \u09a5\u09c1\u09ac\u0987 \u099b\u09cb\u099f", "validators", "bn");
t.add("fos_user.password.mismatch", "\u09aa\u09be\u09b8\u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a1\u099f\u09bf \u09ae\u09c7\u09b2\u09c7\u09a8\u09bf", "validators", "bn");
t.add("fos_user.new_password.blank", "\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9 \u0995\u09b0\u09c7 \u098f\u0995\u099f\u09bf \u09a8\u09a4\u09c1\u09a8 \u09aa\u09be\u09b8\u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a1 \u09b2\u09bf\u0996\u09c1\u09a8", "validators", "bn");
t.add("fos_user.new_password.short", "\u09a8\u09a4\u09c1\u09a8 \u09aa\u09be\u09b8\u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a1 \u099f\u09bf \u09a5\u09c1\u09ac\u0987 \u099b\u09cb\u099f", "validators", "bn");
t.add("fos_user.current_password.invalid", "\u09aa\u09be\u09b8\u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a1\u099f\u09bf \u09b8\u09a0\u09bf\u0995 \u09a8\u09df", "validators", "bn");
t.add("fos_user.group.blank", "\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9 \u0995\u09b0\u09c7 \u098f\u0995\u099f\u09bf \u09a8\u09be\u09ae \u09b2\u09bf\u0996\u09c1\u09a8", "validators", "bn");
t.add("fos_user.group.short", "\u09a8\u09be\u09ae\u099f\u09bf \u09a5\u09c1\u09ac\u0987 \u099b\u09cb\u099f", "validators", "bn");
t.add("fos_user.group.long", "\u09a8\u09be\u09ae\u099f\u09bf \u09a5\u09c1\u09ac\u0987 \u09ac\u09dc", "validators", "bn");
t.add("fos_group.name.already_used", "\u09a8\u09be\u09ae\u099f\u09bf \u0987\u09a4\u09bf\u09ae\u09a7\u09cd\u09af\u09c7 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7", "validators", "bn");
})(Translator);
