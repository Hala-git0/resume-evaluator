# قاعدة بيانات وهمية على شكل Dictionary لتخزين المستخدمين
# شكل الحساب سيكون: { "email": "...", "hashed_password": "...", "role": "user" }
users: dict[str, dict] = {}