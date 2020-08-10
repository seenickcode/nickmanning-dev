import 'package:flutter/material.dart';
import 'package:flutter_linkify/flutter_linkify.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'nickmanning.dev',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Home(),
    );
  }
}

class Home extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 20.0, vertical: 20.0),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Padding(
                  padding:
                      EdgeInsets.symmetric(vertical: 50.0, horizontal: 0.0),
                  child: Text(
                    'nickmanning.dev',
                    style:
                        TextStyle(fontSize: 52.0, fontFamily: 'Campton Book'),
                  ),
                ),
                FractionallySizedBox(
                  widthFactor: 0.75,
                  child: Column(children: <Widget>[
                    HeroTextBlock(
                        'For the past 18 years, Nick has found nothing more fun than turning creative ideas into software. Before even owning a computer in middle school, Nick would copy down, by hand, video games written in BASIC into his daily journal because the code looked cool. In high school, he started teaching himself programming, becoming an obsessed "programming book enthusiast"'),
                    HeroTextBlock(
                        'Nick has worked as technical lead on various projects for global brands such as Adidas, Reebok and Louis Vuitton. Since serving as Director of Mobile for a now Trip Advisor acquired company, he has co-found various startups. Since 2016, he has held various positions as CTO, including the Techstars accelerator.'),
                    // Padding(
                    //   padding:
                    //       EdgeInsets.symmetric(vertical: 20.0, horizontal: 0.0),
                    //   child: Text('Links',
                    //       style: TextStyle(
                    //           fontFamily: 'Open Sans',
                    //           fontWeight: FontWeight.bold)),
                    // ),
                    // ***
                    //
                    // WTF notes:
                    // - can't select text
                    // - can't easily render anchor tags (doesn't even work), need 3rd party libs
                    // - text is cut off (looks like due to custom open sans font)
                    // ***
                    // Row(
                    //   children: [
                    //     Linkify(
                    //       onOpen: (link) =>
                    //           _launchURL("https://fluttercrashcourse.com"),
                    //       text: "fluttercrashcourse.com",
                    //       style: TextStyle(color: Color(0x6c2ffe)),
                    //       linkStyle: TextStyle(color: Colors.red),
                    //     )
                    //   ],
                    // )
                  ]),
                ),
              ]),
        ),
      ),
      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

_launchURL(String url) async {
  if (await canLaunch(url)) {
    await launch(url);
  } else {
    throw 'Could not launch $url';
  }
}

class HeroTextBlock extends StatelessWidget {
  final String text;

  const HeroTextBlock(this.text);

  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 30.0, horizontal: 00.0),
      child: Text(text,
          style: TextStyle(fontFamily: 'Open Sans'),
          textAlign: TextAlign.justify),
    );
  }
}
