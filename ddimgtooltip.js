








var ddimgtooltip={



	


tiparray:function()


{

		





var tooltips=[]

		


//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]

		





tooltips[0]=["images/swot.gif"]




tooltips[1]=["images/ansoff.gif"]

		


tooltips[2]=["images/growth.gif"]

		


tooltips[3]=["images/7s.gif"]



	


tooltips[4]=["images/5forces.gif"]

		


tooltips[5]=["images/balanced_scorecard.gif"]



	


tooltips[6]=["images/interview.gif"]




tooltips[7]=["images/workshop.gif"]

		


tooltips[8]=["images/sample.gif"]

		


tooltips[9]=["images/rich_picture.gif"]



	


tooltips[10]=["images/mind_map.gif"]

		


tooltips[11]=["images/context_diagram.gif"]






tooltips[12]=["images/wheel.gif"]




tooltips[13]=["images/power_interest.gif"]




tooltips[14]=["images/catwoe.gif"]




tooltips[15]=["images/bam.gif"]




tooltips[16]=["images/thomas_kilmann.gif"]




tooltips[17]=["images/batna.gif"]




tooltips[18]=["images/value.gif"]




tooltips[19]=["images/value_chains.gif"]




tooltips[20]=["images/business_context.gif"]




tooltips[21]=["images/swimlanes.gif"]




tooltips[22]=["images/business_rules.gif"]




tooltips[23]=["images/decision_tree.gif"]




tooltips[24]=["images/gap_analysis.gif"]




tooltips[25]=["images/feasibility.gif"]




tooltips[26]=["images/force_field.gif"]




tooltips[27]=["images/cost_benefit.gif"]




tooltips[28]=["images/impact.gif"]


tooltips[29]=["images/appraisal.gif"]






tooltips[30]=["images/irr.gif"]






tooltips[31]=["images/business_case.gif"]






tooltips[32]=["images/scenarios.gif"]






tooltips[33]=["images/user_story.gif"]






tooltips[34]=["images/storyboard.gif"]






tooltips[35]=["images/storyboarding.gif"]






tooltips[36]=["images/story_proto.gif"]






tooltips[37]=["images/prototype.gif"]






tooltips[38]=["images/prototype2.gif"]






tooltips[39]=["images/req_structure.gif"]


tooltips[40]=["images/req_negotiation.gif"]


tooltips[41]=["images/moscow.gif"]






tooltips[42]=["images/timebox.gif"]






tooltips[43]=["images/agile.gif"]






tooltips[44]=["images/sprint.gif"]








tooltips[45]=["images/req_negotiation2.gif"]






tooltips[46]=["images/behaviour_tree.gif"]






tooltips[47]=["images/behaviour_tree2.gif"]






tooltips[48]=["images/behaviour_tree3.gif"]






tooltips[49]=["images/behaviour_tree4.gif"]






tooltips[50]=["images/behaviour_tree5.gif"]






tooltips[51]=["images/req_acceptance.gif"]






tooltips[52]=["images/use_case_diagram.gif"]






tooltips[53]=["images/use_case_description.gif"]






tooltips[54]=["images/data_relations.gif"]






tooltips[55]=["images/class_model.gif"]






tooltips[56]=["images/class_model2.gif"]






tooltips[57]=["images/crud.gif"]






tooltips[58]=["images/change_model.gif"]






tooltips[59]=["images/deal_kennedy.gif"]






tooltips[60]=["images/honey_mumford.gif"]






tooltips[61]=["images/competence.gif"]






tooltips[62]=["images/benefits_map.gif"]






tooltips[63]=["images/benefits_plan.gif"]






tooltips[64]=["images/balanced_scorecard.gif"]






tooltips[65]=["images/eisenhower_time.gif"]

	


return tooltips


}(),









tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips



 





//***** NO NEED TO EDIT BEYOND HERE



	





tipprefix: 'imgtip', 





//tooltip ID prefixes



	createtip:function($, tipid, tipinfo){

		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet

			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(

				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'

				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')

				)

			.css(tipinfo[2] || {})

			.appendTo(document.body)

		}

		return null

	},



	positiontooltip:function($, $tooltip, e){

		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]

		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 

		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x

		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y

		$tooltip.css({left:x, top:y})

	},

	

	showbox:function($, $tooltip, e){

		$tooltip.show()

		this.positiontooltip($, $tooltip, e)

	},



	hidebox:function($, $tooltip){

		$tooltip.hide()

	},





	init:function(targetselector){

		jQuery(document).ready(function($){

			var tiparray=ddimgtooltip.tiparray

			var $targets=$(targetselector)

			if ($targets.length==0)

				return

			var tipids=[]

			$targets.each(function(){

				var $target=$(this)

				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"

				var tipsuffix=parseInt(RegExp.$1) //get d as integer

				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it

				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])

				$target.mouseenter(function(e){

					var $tooltip=$("#"+this._tipid)

					ddimgtooltip.showbox($, $tooltip, e)

				})

				$target.mouseleave(function(e){

					var $tooltip=$("#"+this._tipid)

					ddimgtooltip.hidebox($, $tooltip)

				})

				$target.mousemove(function(e){

					var $tooltip=$("#"+this._tipid)

					ddimgtooltip.positiontooltip($, $tooltip, e)

				})

				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)

					$tooltip.mouseenter(function(){

						ddimgtooltip.hidebox($, $(this))

					})

				}

			})



		}) //end dom ready

	}

}



//ddimgtooltip.init("targetElementSelector")

ddimgtooltip.init("*[rel^=imgtip]")

