Meteor.methods({
  sendEmail: function(options) {
    check(options, Object);

    var mailgun = new Mailgun({
      apiKey: Meteor.settings.mailgun.apiKey,
      domain: Meteor.settings.mailgun.domain
    });

    if (options.to === 'jacklam718@gmail.com') {
      return mailgun.send(options);
    }

    return 'send email failed';
  }
});
