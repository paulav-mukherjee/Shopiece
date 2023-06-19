import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
	title = 'Shopiece';
	closeResult: string | undefined;
	formStage: string = 'signup'
	content: any;
	signup: any;
	login: any;

	public isUserLogin: boolean = false;
	public isAdminLogin: boolean = false;
	public navMenu: any
	constructor(private modalService: NgbModal, private route : Router) { }


	ngDoCheck(): void {
		let userToken = localStorage.getItem('token')
		let userMenu = localStorage.getItem('menu')
		userToken ? this.isUserLogin = true : this.isUserLogin = false;
		if(userMenu)
		this.navMenu = JSON.parse(userMenu)	
		// console.log(this.isUserLogin);
			
	}
	logoutUser(){
		localStorage.clear()
		this.route.navigateByUrl('')
	}
	ngOnInit(): void {
		
	}









	onChangeForm() {
		this.formStage = 'login'
	}
	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result: any) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}




