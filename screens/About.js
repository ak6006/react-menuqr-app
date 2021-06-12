
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image, ScrollView } from 'react-native';
import actuatedNormalize from '../Normalize';

export default function About() {
	return (
		<SafeAreaView>
			<ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
			
			
				<View style={styles.header}>
					
				</View>
				<ScrollView>
				<View style={styles.logoContainer}>
						<Image
							style={styles.logo}
							source={require('../assets/images/logo_qrzebra.png')}
						/>
					</View>
					<View style={styles.texts}>
						<Text style={styles.textHeader}>نبذه مختصرة عن الشركة</Text>
						<Text style={styles.textSmall}>
							أي فكرة عظيمة ،أساسها الابتكار والتعاون. 
							وجوهر عملنا في TEAM I هو روح الفريق والتعاون البناء مع عملائنا للابتكار والابداع 
							من اجل النجاح والتطور المستمر ، وتقديم افضل الخدمات التي تميز عملائنا وتبني الثقة.
						</Text>
						<Text style={styles.textSmall}>
							شركة TEAM I هي شركة متكاملة تقدم لك العديد من الخدمات مثل الخدمات التقنية (تطبيقات الموبايل – تطبيقات الويب – تصميم المواقع الإلكترونية - البرمجة)
							كما تقدم خدمات الانتاج الاعلامي :-
							‏(Video Editing – Photography- Videography –Advertising –Scripting – Social Media Designing) 
							نحن نسعي دائماً لنجاحك من خلال توفير الخدمات التي تضعك علي طريق الانطلاق نحو التميز.
							ومن اجل هذا نقدم افضل البرامج المتطورة لادارة المطاعم والكافيهات من خلال موقع وتطبيق
							‏(MENU QR)
						</Text>
						<Text style={styles.textSmall}>
							هو منشئ قوائم المطاعم على الإنترنت. كما يقدم خدمة بناء قائمة بدون تلامس لأصحاب المطاعم في أقل من 30 دقيقة ، ويوفر طريقة سهلة لتحديث القوائم وتغييرها والتحكم بها، كما يتيح اختيار تصميم القائمة بما يتناسب مع المكان ، واستخدامها في التسويق الالكتروني و وسائل التواصل الاجتماعي .
						</Text>
						<Text style={styles.textSmall}>
							تستخدم قوائم عدم التلامس  رموز QR   التي توضع كبطاقات على الطاولات ،والتي من خلالها يستطيع رواد المطعم من استخدام هواتفهم الذكية لقراءة هذه الرموز التي توجههم الى قائمة المطعم عبر الانترنيت ، إنه آمن وسهل الاستخدام للرواد ، لعدم التلامس مع القوائم المطبوعة ، وسيكون هاتفك هو قائمتك الخاصة .
							وايضا يتيح التطبيق حرية الاختيار بين العديد من المطاعم ، بخاصية البحث المتطور  للمطاعم بحسب النطاق الجغرافي و الاختصاص و الاكثر تقيما من الرواد .
							وتستطيع استخدام التطبيق بشكل اساسي في قراءة رموز QR ، والحصول على قائمتك بكل سهولة وباكثر امان .
						</Text>
					</View>
				</ScrollView>
					
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		width: "100%",
		height: "100%",
	},
	header: {
		justifyContent: "center",
		alignItems: 'center',
		backgroundColor: "#154d68",
		height: 10,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20
	},
	logo: {
		height: 100,
		resizeMode: "contain",
		justifyContent: "center",
		alignItems: "center"
	},
	logoContainer: {
		justifyContent: "center",
		alignItems: 'center',
		marginTop: 30,
		marginLeft: 20,
		marginRight: 20,
		padding: 5,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30
	},
	texts: {
		justifyContent: "center",
		alignItems: "flex-end",
		margin: 40,
		marginLeft: 20,
		marginRight: 20,
		padding: 5,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	textHeader: {
		color: "#f7a722",
		fontSize: actuatedNormalize(28),
		// fontWeight: "700",
		letterSpacing: 2,
		marginTop: 4,
		marginBottom: 4,
		fontFamily: 'Cairo-Regular',
	},
	textSmall: {
		fontSize: actuatedNormalize(18),
		margin: 2,
		fontFamily: 'Cairo-Regular',
		textAlign: "justify",
		writingDirection: "rtl",
	}
});
