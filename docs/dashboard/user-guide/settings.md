# Settings

The SkillTree Dashboard requires very little administration, however there are several settings that may need attention depending on your configuration.

Administration settings can be accessed by users via the ```Settings``` menu entry in the drop-down menu located on the top-right of the application.
Please note that number of settings' section are only visible to users with the [Root](/dashboard/user-guide/users.html#root) role. 

![SkillTree Dashboard Menu](../../overview/screenshots/Screenshot_2021-03-31SkillTreeDashboard-ViewMenu.png)

As of version 1.4.0, the default view in the Dashboard has changed. Now, when a user accesses the Dashboard, a Progress and Rankings view
for all projects with ```Production Mode``` enabled will be displayed for the current user. This allows the current user to access their Progress and Ranking for
all projects available on that instance of SkillTree in one place. Both the ```Progress and Ranking``` and the ```Project Admin```
views can be accessed from the drop down menu at the top right.


## Preferences
The default view can be configured per user via the ```Settings``` menu item, under ```Preferences```
![SkillTree Dashboard Menu](../../overview/screenshots/Screenshot_2021-03-31SkillTreeDashboard-Settings-Preferences.png)

## Security Settings
The ```Security``` menu item supports the administration of [Root](/dashboard/user-guide/users.html#root) users and [Supervisor](/dashboard/user-guide/users.html#supervisor) users.

![Root User Management](./screenshots/root_users_management_20201209.png)

![Supervisor User Management](./screenshots/supervisor_user_management_20201209.png)

To grant [Root](/dashboard/user-guide/users.html#root) or [Supervisor](/dashboard/user-guide/users.html#supervisor) privileges to a user, that user must have an existing account for the SkillTree Dashboard. User management will also prevent the removal of any permissions from the currently authenticated user.  

## Email Settings
The primary scenario in which the SkillTree dashboard will send emails is in support of password reset requests for Dashboard users. If Email Server settings are not configured, the password reset feature will be disabled.

![Email Settings](./screenshots/email_settings1_20201209.png)

Email server configuration supports TLS enabled smtp servers, as well as username/password authentication. Changing the ```Authentication``` switch to ```Authentication Enabled``` will reveal the ```Username``` and ```Password``` configuration fields.

::: tip
The email settings form provides a ```Test``` button that can be used to confirm that the dashboard will be able to communicate with the configured mail server. The configured settings will not be applied if the dashboard is unable to successfully communicate with the configured mail server.
:::

## System Settings
![System Settings](./screenshots/system_settings_20201209.png)

Both the ```Public URL``` and ```Password Reset Token Expiration``` settings are specific to supporting the dashboard password reset feature.

Because the dashboard itself may be deployed behind a load balancer or proxy, the ```Public URL``` setting must be configured so that emails emanating from the system can provide valid links back to the dashboard.

The ```Password Reset Token Expiration``` setting allows the ```Root``` user to configure how long a password reset token remains valid. This configuration supports the time component of the ISO 8601 format e.g., ```2H``` for two hours, ```15M30S``` for 15 minutes and 30 seconds, etc.

The ```From Email``` settings allows the ```Root``` user to configure what from email will be used for any emails emanating from the SkillTree dashboard. If no value is explicitly configured, ```no_reply@skilltree``` will be used by default.

``Custom Header`` and ```Custom Footer``` allow the ```Root``` user to specify HTML to be used as a custom header and footer that will be applied to the SkillTree dashboard.

::: warning
&lt;script&gt; tags are not permitted in the html configured for the header or footer
:::

for example:

![Custom Header Input](./screenshots/custom_header_input_20201209.png)

will result in

![Custom Header Example](./screenshots/custom_header_20201209.png)

Likewise, for the ```Custom Footer```:

![Custom Footer Input](./screenshots/custom_footer_input_20201209.png)

will result in

![Custom Footer Example](./screenshots/custom_footer_20201209.png) 
  
