# Design Context

**The why**
The teams intgreation is a strategic decision for Retain because we are a platform that empowers Employees to discover
their Success Enablers, or tools, technology, benefits and
accommodations in an anonymous setting. We can then report back the engagement data (search trends, success enabler
clicks, etc) back to HR leader so they can better support their employes.

**The who**
We sell into large enterprise accounts, all of which have Teams and it removes an onboarding barrier since employees are
already within Teams every day.

**The problem**
Retain is mobile friendly, we just build APIs to expose Retain into ServiceNow as a widget too, although we think we
need to build an iframe route ex. "app.inclusively.com/teams" for this.
I read that via tab app integration w/ teams, it needs to be built within an embedded iframe so to mimic the web-app
experience, without the need to context switch for the employee. I'd like
to explore if there's an alternative way to integrate Retain into Teams so that Employees can search and discover their
success enablers via search API + manual browsing (clicking on Success
Enabler cards). And, keep in mind we need to authenticate the user, as we may be exposing employer specific data. Do we
authenticate th user via SSO on our web-app, or is authentication
handled by teams?


   