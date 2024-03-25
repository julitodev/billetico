(function(abp){

    abp.multiTenancy = abp.multiTenancy || {};
    abp.multiTenancy.isEnabled = true;

})(abp);

(function(){

    abp.session = abp.session || {};
    abp.session.userId = null;
    abp.session.tenantId = null;
    abp.session.impersonatorUserId = null;
    abp.session.impersonatorTenantId = null;
    abp.session.multiTenancySide = 2;

})();

(function(){

    abp.localization = abp.localization || {};

    abp.localization.currentCulture = {
        name: 'en',
        displayName: 'English'
    };

    abp.localization.languages = [{
        name: 'en',
        displayName: 'English',
        icon: 'famfamfam-flags gb',
        isDisabled: false,
        isDefault: true
    } , {
        name: 'es-MX',
        displayName: 'Español México',
        icon: 'famfamfam-flags mx',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'fr',
        displayName: 'Français',
        icon: 'famfamfam-flags fr',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'de',
        displayName: 'German',
        icon: 'famfamfam-flags de',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'it',
        displayName: 'Italiano',
        icon: 'famfamfam-flags it',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'nl',
        displayName: 'Nederlands',
        icon: 'famfamfam-flags nl',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'pt-BR',
        displayName: 'Português',
        icon: 'famfamfam-flags br',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'tr',
        displayName: 'Türkçe',
        icon: 'famfamfam-flags tr',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'ru',
        displayName: 'Русский',
        icon: 'famfamfam-flags ru',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'ar',
        displayName: 'العربية',
        icon: 'famfamfam-flags sa',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'ja',
        displayName: '日本語',
        icon: 'famfamfam-flags jp',
        isDisabled: false,
        isDefault: false
    } , {
        name: 'zh-Hans',
        displayName: '简体中文',
        icon: 'famfamfam-flags cn',
        isDisabled: false,
        isDefault: false
    }];

    abp.localization.currentLanguage = {
        name: 'en',
        displayName: 'English',
        icon: 'famfamfam-flags gb',
        isDisabled: false,
        isDefault: true
    };

    abp.localization.sources = [
        {
            name: 'Abp',
            type: 'MultiTenantLocalizationSource'
        },
        {
            name: 'AbpWeb',
            type: 'MultiTenantLocalizationSource'
        },
        {
            name: 'AbpZero',
            type: 'MultiTenantLocalizationSource'
        },
        {
            name: 'OnlineStore',
            type: 'MultiTenantLocalizationSource'
        }
    ];

    abp.localization.values = abp.localization.values || {};

    abp.localization.values['Abp'] = {
  "AllOfTheseFeaturesMustBeEnabled": "Required features are not enabled. All of these features must be enabled: {0}",
  "AllOfThesePermissionsMustBeGranted": "Required permissions are not granted. All of these permissions must be granted: {0}",
  "AtLeastOneOfTheseFeaturesMustBeEnabled": "Required features are not enabled. At least one of these features must be enabled: {0}",
  "AtLeastOneOfThesePermissionsMustBeGranted": "Required permissions are not granted. At least one of these permissions must be granted: {0}",
  "CurrentUserDidNotLoginToTheApplication": "Current user did not login to the application!",
  "DefaultFromSenderDisplayName": "Default from (sender) display name",
  "DefaultFromSenderEmailAddress": "Default from (sender) email address",
  "DefaultLanguage": "Default language",
  "DomainName": "Domain name",
  "FeatureIsNotEnabled": "Feature is not enabled: {0}",
  "MainMenu": "Main menu",
  "Password": "Password",
  "ReceiveNotifications": "Receive notifications",
  "SmtpHost": "SMTP host",
  "SmtpPort": "SMTP port",
  "TimeZone": "Timezone",
  "UseDefaultCredentials": "Use default credentials",
  "Username": "User name",
  "UseSSL": "Use SSL"
};

    abp.localization.values['AbpWeb'] = {
  "AreYouSure": "Are you sure?",
  "Cancel": "Cancel",
  "DefaultError": "An error has occurred!",
  "DefaultError401": "You are not authenticated!",
  "DefaultError403": "You are not authorized!",
  "DefaultError404": "Resource not found!",
  "DefaultErrorDetail": "Error detail not sent by server.",
  "DefaultErrorDetail401": "You should be authenticated (sign in) in order to perform this operation.",
  "DefaultErrorDetail403": "You are not allowed to perform this operation.",
  "DefaultErrorDetail404": "The resource requested could not found on the server.",
  "EntityNotFound": "There is no entity {0} with id = {1}!",
  "InternalServerError": "An internal error occurred during your request!",
  "ValidationError": "Your request is not valid!",
  "ValidationNarrativeTitle": "The following errors were detected during validation.",
  "Yes": "Yes"
};

    abp.localization.values['AbpZero'] = {
  "CanNotDeleteAdminUser": "Can not delete user {0} since this is the default admin user!",
  "CanNotDeleteStaticRole": "Can not delete a static role: {0}",
  "CanNotRenameAdminUser": "Can not rename user name of the {0} since this is the default admin user!",
  "Email": "Email",
  "EmailSecurityCodeBody": "Your security code is: {0}",
  "EmailSecurityCodeSubject": "Security Code",
  "Identity.ConcurrencyFailure": "Optimistic concurrency failure, object has been modified.",
  "Identity.DefaultError": "An unknown failure has occurred.",
  "Identity.DuplicateEmail": "Email '{0}' is already taken.",
  "Identity.DuplicateRoleName": "Role name '{0}' is already taken.",
  "Identity.DuplicateUserName": "User name '{0}' is already taken.",
  "Identity.InvalidEmail": "Email '{0}' is invalid.",
  "Identity.InvalidPasswordHasherCompatibilityMode": "The provided PasswordHasherCompatibilityMode is invalid.",
  "Identity.InvalidPasswordHasherIterationCount": "The iteration count must be a positive integer.",
  "Identity.InvalidRoleName": "Role name '{0}' is invalid.",
  "Identity.InvalidToken": "Invalid token.",
  "Identity.InvalidUserName": "User name '{0}' is invalid, can only contain letters or digits.",
  "Identity.LoginAlreadyAssociated": "A user with this login already exists.",
  "Identity.PasswordMismatch": "Incorrect password.",
  "Identity.PasswordRequireDigit": "Passwords must have at least one digit ('0'-'9').",
  "Identity.PasswordRequireLower": "Passwords must have at least one lowercase ('a'-'z').",
  "Identity.PasswordRequireNonAlphanumeric": "Passwords must have at least one non alphanumeric character.",
  "Identity.PasswordRequireUpper": "Passwords must have at least one uppercase ('A'-'Z').",
  "Identity.PasswordTooShort": "Passwords must be at least {0} characters.",
  "Identity.RoleNotFound": "Role {0} does not exist.",
  "Identity.UserAlreadyHasPassword": "User already has a password set.",
  "Identity.UserAlreadyInRole": "User already in role '{0}'.",
  "Identity.UserLockedOut": "User is locked out.",
  "Identity.UserLockoutNotEnabled": "Lockout is not enabled for this user.",
  "Identity.UserNameNotFound": "User {0} does not exist.",
  "Identity.UserNotInRole": "User is not in role '{0}'.",
  "InvalidFeatureValue": "{0} feature value is not valid!",
  "InvalidTenancyName": "Tenancy name is not valid!",
  "OrganizationUnitDuplicateDisplayNameWarning": "There is already an organization unit with name {0}. Two units with same name can not be created in same level.",
  "RoleDisplayNameIsAlreadyTaken": "Role display name {0} is already taken.",
  "RoleNameIsAlreadyTaken": "Role name {0} is already taken.",
  "Sms": "Sms",
  "SmsSecurityCodeMessage": "Your security code is: {0}",
  "TenancyNameIsAlreadyTaken": "Tenancy name {0} is already taken."
};

    abp.localization.values['OnlineStore'] = {
  "About": "About",
  "Actions": "Actions",
  "Admin_Category_Create": "Admin Category Create",
  "Admin_Category_Delete": "Admin Category Delete",
  "Admin_Category_UpdateProductCategoryCountJob": "Admin Category UpdateProductCategoryCountJob",
  "Admin_Order_Delete": "Admin Order Delete",
  "Admin_Product_AddProductCategoryMappingJob": "Admin Product AddProductCategoryMappingJob",
  "Admin_Product_Create": "Admin Product Create",
  "Admin_Product_Delete": "Admin Product Delete",
  "Admin_Product_RemoveImage": "Admin_Product_RemoveImage",
  "Admin_Product_Update": "Admin Product Update",
  "Admin_Product_UpdateStoreAndPrice": "Admin Product UpdateStoreAndPrice",
  "Admin_Product_VerifyProduct": "Admin Product VerifyProduct",
  "Admin_Quote_Create": "Admin Quote Create",
  "Admin_Quote_Update": "Admin Quote Update",
  "AdminEmailAddress": "Admin email address",
  "Administration": "Administration",
  "AdminPassword": "Admin password",
  "Admins": "Admins",
  "AreYouSureWantToDelete": "Are you sure want to delete {0}?",
  "Back": "Back",
  "CanBeEmptyToLoginAsHost": "Can be empty to login as host.",
  "Cancel": "Cancel",
  "Change": "Change",
  "ChangeTenant": "Change tenant",
  "ClearAll": "Clear all",
  "ClearOthers": "Clear others",
  "ConfirmPassword": "Confirm password",
  "CouldNotCompleteLoginOperation": "Could not complete login operation. Please try again later.",
  "CouldNotValidateExternalUser": "Could not validate external user",
  "Create": "Create",
  "CreateNewRole": "Create new role",
  "CreateNewTenant": "Create new tenant",
  "CreateNewUser": "Create new user",
  "CurrentTenant": "Current tenant",
  "DatabaseConnectionString": "Database connection string",
  "DefaultPasswordIs": "Default password is {0}",
  "Delete": "Delete",
  "DisplayName": "Display Name",
  "Edit": "Edit",
  "EditRole": "Edit role",
  "EditTenant": "Edit tenant",
  "EditUser": "Edit user",
  "EmailAddress": "Email address",
  "Filter": "Filter",
  "FormIsNotValidMessage": "Form is not valid. Please check and fix errors.",
  "FullName": "Full name",
  "HomePage": "Home page",
  "InvalidUserNameOrPassword": "Invalid user name or password",
  "IsActive": "Is active",
  "LabelOptions": "Label options",
  "LeaveEmptyToSwitchToHost": "Leave empty to switch to the host",
  "LogIn": "Log in",
  "LoginFailed": "Login failed!",
  "Logout": "Logout",
  "MultiLevelMenu": "Multi Level Menu",
  "Name": "Name",
  "NameSurname": "Name surname",
  "No": "No",
  "NotSelected": "Not selected",
  "Off": "Off",
  "On": "On",
  "Optional": "Optional",
  "OrLoginWith": "Or login with",
  "Pages_Admin_Blog_CreateOrUpdate": "Pages Admin Blog CreateOrUpdate",
  "Pages_Admin_Blog_Delete": "Pages Admin Blog Delete",
  "Pages_Admin_Login": "Pages Admin Login",
  "Pages_Admin_Manufacturer_Create": "Pages Admin Manufacturer Create",
  "Pages_Admin_Manufacturer_Delete": "Pages Admin Manufacturer Delete",
  "Pages_Admin_Manufacturer_Update": "Pages Admin Manufacturer Update",
  "Pages_Admin_Menu_Create": "Pages Admin Menu Create",
  "Pages_Admin_Menu_Delete": "Pages Admin Menu Delete",
  "Pages_Admin_Menu_Update": "Pages Admin Menu Update",
  "Pages_Admin_MenuItem_Create": "Pages Admin MenuItem Create",
  "Pages_Admin_MenuItem_Delete": "Pages Admin MenuItem Delete",
  "Pages_Admin_MenuItem_Update": "Pages Admin MenuItem Update",
  "Pages_Admin_PagesRedirect_Create": "Pages Admin PagesRedirect Create",
  "Pages_Admin_PagesRedirect_Update": "Pages Admin PagesRedirect Update",
  "Pages_Admin_ProductAttribute_Create": "Pages Admin ProductAttribute Create",
  "Pages_Admin_ProductAttribute_Delete": "Pages Admin ProductAttribute Delete",
  "Pages_Admin_ProductAttribute_Update": "Pages Admin ProductAttribute Update",
  "Pages_Admin_ProductAttributePreDefinedValue_Create": "Pages Admin ProductAttributePreDefinedValue Create",
  "Pages_Admin_ProductAttributePreDefinedValue_Delete": "Pages Admin ProductAttributePreDefinedValue Delete",
  "Pages_Admin_ProductAttributePreDefinedValue_Update": "Pages Admin ProductAttributePreDefinedValue Update",
  "Pages_Admin_Role_Create": "Pages Admin Role Create",
  "Pages_Admin_Role_Delete": "Pages Admin Role Delete",
  "Pages_Admin_Role_Get": "Pages Admin Role Get",
  "Pages_Admin_Role_GetAllPermissions": "Pages Admin Role GetAllPermissions",
  "Pages_Admin_Role_GetRoleForEdit": "Pages Admin Role GetRoleForEdit",
  "Pages_Admin_Role_GetRolesAsync": "Pages Admin Role GetRolesAsync",
  "Pages_Admin_Role_Update": "Pages Admin Role Update",
  "Pages_Admin_ShippingBox_Create": "Pages Admin ShippingBox Create",
  "Pages_Admin_ShippingBox_Delete": "Pages Admin ShippingBox Delete",
  "Pages_Admin_ShippingBox_Update": "Pages Admin ShippingBox Update",
  "Pages_Admin_ShippingService_Create": "Pages Admin ShippingService Create",
  "Pages_Admin_ShippingService_Delete": "Pages Admin ShippingService Delete",
  "Pages_Admin_ShippingService_Update": "Pages Admin ShippingService Update",
  "Pages_Admin_Tenant_Create": "Pages Admin Tenant Create",
  "Pages_Admin_Tenant_Delete": "Pages Admin Tenant Delete",
  "Pages_Admin_Tenant_Get": "Pages Admin Tenant Get",
  "Pages_Admin_Tenant_GetAll": "Pages Admin Tenant GetAll",
  "Pages_Admin_Tenant_Update": "Pages Admin Tenant Update",
  "Pages_Admin_User_ChangeLanguage": "Pages Admin User ChangeLanguage",
  "Pages_Admin_User_Create": "Pages Admin User Create",
  "Pages_Admin_User_Delete": "Pages Admin User Delete",
  "Pages_Admin_User_GetAll": "Pages Admin User GetAll",
  "Pages_Admin_User_GetRoles": "Pages Admin User GetRoles",
  "Pages_Admin_User_Update": "Pages Admin User Update",
  "Password": "Password",
  "Permissions": "Permissions",
  "PleaseEnterLoginInformation": "Please enter login information",
  "PleaseWait": "Please wait...",
  "Refresh": "Refresh",
  "Register": "Register",
  "RegisterFormUserNameInvalidMessage": "Please don't enter an email address for username.",
  "RememberMe": "Remember me",
  "ResetPassword": "Reset Password",
  "RoleDescription": "Role description",
  "RoleName": "Role Name",
  "Roles": "Roles",
  "Save": "Save",
  "SavedSuccessfully": "Saved successfully",
  "Settings": "Settings",
  "Skins": "Skins",
  "StartTyping": "Start Typing",
  "SuccessfullyRegistered": "Successfully registered",
  "Surname": "Surname",
  "TenancyName": "Tenancy name",
  "TenantIdIsNotActive{0}": "TenantId {0} is not active",
  "TenantIsNotActive": "Tenant {0} is not active.",
  "TenantName_Regex_Description": "Tenant name must be at least 2 chars, starts with a letter and continue with letter, number, dash or underscore.",
  "TenantNameCanNotBeEmpty": "Tenant name can not be empty",
  "Tenants": "Tenants",
  "TenantSelection": "Tenant Selection",
  "TenantSelection_Detail": "Please select one of the following tenants.",
  "ThereIsNoTenantDefinedWithName{0}": "There is no tenant defined with name {0}",
  "ThisFieldIsRequired": "This field is required",
  "UnknownTenantId{0}": "Unknown tenantId {0}",
  "UpdatePassword": "Update Password",
  "UserDetails": "User details",
  "UserEmailIsNotConfirmedAndCanNotLogin": "Your email address is not confirmed. You can not login.",
  "UserIsNotActiveAndCanNotLogin": "User {0} is not active and can not log in.",
  "UserLockedOutMessage": "The user account has been locked out. Please try again later.",
  "UserName": "User name",
  "UserNameOrEmail": "User name or email",
  "UserRoles": "User roles",
  "Users": "Users",
  "Version": "Version",
  "WaitingForActivationMessage": "Your account is waiting to be activated by system admin.",
  "WaitingForEmailActivation": "Your email address should be activated",
  "WelcomeMessage": "Welcome to OnlineStore!",
  "Yes": "Yes"
};


})();

(function() {

    abp.features = abp.features || {};

    abp.features.allFeatures = {
    };

})();

(function(){

    abp.auth = abp.auth || {};

    abp.auth.allPermissions = {
        'Pages.Users': true,
        'Pages.Roles': true,
        'Pages.Admin.Login': true,
        'Pages.Quote.Create': true,
        'Pages.Quote.Update': true,
        'Pages.Admin.Product.Create': true,
        'Pages.Admin.Product.VerifyProduct': true,
        'Pages.Admin.Product.Update': true,
        'Pages.Admin.Product.UpdateStoreAndPrice': true,
        'Pages.Admin.Product.Delete': true,
        'Pages.Admin.Product.AddProductCategoryMappingJob': true,
        'Pages.Admin.Product.RemoveImage': true,
        'Pages.Admin.Product.UpdateSoldStatus': true,
        'Pages.Admin.Category.UpdateProductCategoryCountJob': true,
        'Pages.Admin.Category.Delete': true,
        'Pages.Admin.Category.Create': true,
        'Pages.Admin.Order.Create': true,
        'Pages.Admin.Order.Update': true,
        'Pages.Admin.Order.Delete': true,
        'Pages.Admin.Order.GetAll': true,
        'Pages.Tenants': true,
        'Pages.Admin.User.Create': true,
        'Pages.Admin.User.Update': true,
        'Pages.Admin.User.Delete': true,
        'Pages.Admin.User.GetRoles': true,
        'Pages.Admin.User.ChangeLanguage': true,
        'Pages.Admin.User.Get': true,
        'Pages.Admin.User.GetAll': true,
        'Pages.Admin.Tenant.Create': true,
        'Pages.Admin.Tenant.Update': true,
        'Pages.Admin.Tenant.Delete': true,
        'Pages.Admin.Tenant.Get': true,
        'Pages.Admin.Tenant.GetAll': true,
        'Pages.Admin.Role.Create': true,
        'Pages.Admin.Role.Update': true,
        'Pages.Admin.Role.Delete': true,
        'Pages.Admin.Role.Get': true,
        'Pages.Admin.Role.GetAll': true,
        'Pages.Admin.Role.GetRolesAsync': true,
        'Pages.Admin.Role.GetAllPermissions': true,
        'Pages.Admin.Role.GetRoleForEdit': true,
        'Pages.Admin.Menu.Create': true,
        'Pages.Admin.Menu.Update': true,
        'Pages.Admin.Menu.Delete': true,
        'Pages.Admin.MenuItem.Create': true,
        'Pages.Admin.MenuItem.Update': true,
        'Pages.Admin.MenuItem.Delete': true,
        'Pages.Admin.Manufacturer.Create': true,
        'Pages.Admin.Manufacturer.Update': true,
        'Pages.Admin.Manufacturer.Delete': true,
        'Pages.Admin.ProductAttribute.Create': true,
        'Pages.Admin.ProductAttribute.Update': true,
        'Pages.Admin.ProductAttribute.Delete': true,
        'Pages.Admin.ProductAttributePreDefinedValue.Create': true,
        'Pages.Admin.ProductAttributePreDefinedValue.Update': true,
        'Pages.Admin.ProductAttributePreDefinedValue.Delete': true,
        'Pages.Admin.ShippingBox.Create': true,
        'Pages.Admin.ShippingBox.Update': true,
        'Pages.Admin.ShippingBox.Delete': true,
        'Pages.Admin.ShippingService.Create': true,
        'Pages.Admin.ShippingService.Update': true,
        'Pages.Admin.ShippingService.Delete': true,
        'Pages.Admin.Shipping.AddOrderItemsToShipping': true,
        'Pages.Admin.Shipping.UpdateOrderShippingItemShippingStatus': true,
        'Pages.Admin.Shipping.UpdateOrderStatus': true,
        'Pages.Admin.Shipping.SearchOrderShippings': true,
        'Pages.Admin.DiscountRule.Create': true,
        'Pages.Admin.DiscountRule.Update': true,
        'Pages.Admin.DiscountRule.Delete': true,
        'Pages.Admin.DiscountRule.GetAll': true,
        'Pages.Admin.Pages.Create': true,
        'Pages.Admin.Pages.Update': true,
        'Pages.Admin.Pages.Delete': true,
        'Pages.Admin.PagesRedirect.Create': true,
        'Pages.Admin.PagesRedirect.Update': true,
        'Pages.Admin.Blog.Create': true,
        'Pages.Admin.Blog.Delete': true
    };

    abp.auth.grantedPermissions = {
    };

})();

(function() {
    abp.nav = {};
    abp.nav.menus = {
        'MainMenu': {
            name: 'MainMenu',
            displayName: 'Main menu',
            items: [{
                    name: 'About',
                    order: 0,
                    icon: 'info',
                    url: 'About',
                    displayName: 'About',
                    isEnabled: true,
                    isVisible: true,
                    items: []
                } , {
                    name: 'MultiLevelMenu',
                    order: 0,
                    icon: 'menu',
                    displayName: 'Multi Level Menu',
                    isEnabled: true,
                    isVisible: true,
                    items: [{
                            name: 'AspNetBoilerplate',
                            order: 0,
                            displayName: 'ASP.NET Boilerplate',
                            isEnabled: true,
                            isVisible: true,
                            items: [{
                            name: 'AspNetBoilerplateHome',
                            order: 0,
                            url: 'https://aspnetboilerplate.com?ref=abptmpl',
                            displayName: 'Home',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        } , {
                            name: 'AspNetBoilerplateTemplates',
                            order: 0,
                            url: 'https://aspnetboilerplate.com/Templates?ref=abptmpl',
                            displayName: 'Templates',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        } , {
                            name: 'AspNetBoilerplateSamples',
                            order: 0,
                            url: 'https://aspnetboilerplate.com/Samples?ref=abptmpl',
                            displayName: 'Samples',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        } , {
                            name: 'AspNetBoilerplateDocuments',
                            order: 0,
                            url: 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl',
                            displayName: 'Documents',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        }]
                        } , {
                            name: 'AspNetZero',
                            order: 0,
                            displayName: 'ASP.NET Zero',
                            isEnabled: true,
                            isVisible: true,
                            items: [{
                            name: 'AspNetZeroHome',
                            order: 0,
                            url: 'https://aspnetzero.com?ref=abptmpl',
                            displayName: 'Home',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        } , {
                            name: 'AspNetZeroDescription',
                            order: 0,
                            url: 'https://aspnetzero.com/?ref=abptmpl#description',
                            displayName: 'Description',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        } , {
                            name: 'AspNetZeroFeatures',
                            order: 0,
                            url: 'https://aspnetzero.com/?ref=abptmpl#features',
                            displayName: 'Features',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        } , {
                            name: 'AspNetZeroPricing',
                            order: 0,
                            url: 'https://aspnetzero.com/?ref=abptmpl#pricing',
                            displayName: 'Pricing',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        } , {
                            name: 'AspNetZeroFaq',
                            order: 0,
                            url: 'https://aspnetzero.com/Faq?ref=abptmpl',
                            displayName: 'Faq',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        } , {
                            name: 'AspNetZeroDocuments',
                            order: 0,
                            url: 'https://aspnetzero.com/Documents?ref=abptmpl',
                            displayName: 'Documents',
                            isEnabled: true,
                            isVisible: true,
                            items: []
                        }]
                        }]
                }]
            }
    };
})();


(function(){
    abp.setting = abp.setting || {};
    abp.setting.values = {

        'Abp.Localization.DefaultLanguageName': 'en',
        'Abp.Notifications.ReceiveNotifications': 'true',
        'Abp.Timing.TimeZone': 'UTC',
        'Abp.Zero.UserManagement.IsEmailConfirmationRequiredForLogin': 'false',
        'Abp.Zero.OrganizationUnits.MaxUserMembershipCount': '2147483647',
        'Abp.Zero.UserManagement.TwoFactorLogin.IsEnabled': 'true',
        'Abp.Zero.UserManagement.TwoFactorLogin.IsRememberBrowserEnabled': 'true',
        'Abp.Zero.UserManagement.TwoFactorLogin.IsEmailProviderEnabled': 'true',
        'Abp.Zero.UserManagement.TwoFactorLogin.IsSmsProviderEnabled': 'true',
        'Abp.Zero.UserManagement.UserLockOut.IsEnabled': 'true',
        'Abp.Zero.UserManagement.UserLockOut.MaxFailedAccessAttemptsBeforeLockout': '5',
        'Abp.Zero.UserManagement.UserLockOut.DefaultAccountLockoutSeconds': '300',
        'Abp.Zero.UserManagement.PasswordComplexity.RequireDigit': 'false',
        'Abp.Zero.UserManagement.PasswordComplexity.RequireLowercase': 'false',
        'Abp.Zero.UserManagement.PasswordComplexity.RequireNonAlphanumeric': 'false',
        'Abp.Zero.UserManagement.PasswordComplexity.RequireUppercase': 'false',
        'Abp.Zero.UserManagement.PasswordComplexity.RequiredLength': '3',
        'App.UiTheme': 'red'
    };

})();

(function(){
    abp.clock.provider = abp.timing.unspecifiedClockProvider || abp.timing.localClockProvider;
    abp.clock.provider.supportsMultipleTimezone = false;
})();

(function(abp){

    abp.custom = {}

})(abp);

(function(){
    abp.event.trigger('abp.dynamicScriptsInitialized');
})();
