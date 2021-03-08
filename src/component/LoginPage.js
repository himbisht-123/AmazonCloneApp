import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom';
import {auth} from '../firebase';
// import firebase from 'firebase';
import '../styling/LoginPage.css';
function LoginPage() {

    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=e=>{
       e.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
       .then((auth)=>{
        if(auth){
            history.push("/");
        }
        //    console.log(auth);
       
       }).catch(error=>alert())
    }
    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push("/");
            }
            //    console.log(auth)
           
        }).catch(error=>alert(error.message))

    }
    return (
        <div className="loginpage">
           <Link to="/">
            <img 
            className="login-logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAABJlBMVEX///8AAAD+/v7+mQD7+/sEBAT//f/S0tLq6uogICD39/f+mgB+fn7///6vr6/g4OCJiYl1dXX/lgAvLy+2tra9vb35///Ly8s1NTWVlZX+//v///bm5ubZ2dnv7+/5mwBXV1eDg4OkpKQQEBBqamoaGhooKCiRkZFKSkocHBw8PDydnZ1dXV1tbW1DQ0P/+f/5ngD//uP//ev/7tb4mBH/+u7/9NX2xX3/+vLzp0vyoAD8//D/4rj3//j/7tL/9uP94qv70Yv7v2zro0H6ql78uHH7yY3+7Mb0my/rlxnt2Kvuu3vjmDjrq1X936v878Xwozj80av0tlL+kBjloSH205fwxnH43ZfgoSj2zYPuuG//4r396bXtu1jrkRDvrEH/5dT9nTCUhMilAAAbc0lEQVR4nO1cCUPbSLIWbVl2bITBYNmRfIHNESBcMadxTJwdwG8WwiRhZifJkN3//ydeVbeOrpYEmGeOeauaA1tHH5/qrpI1LaGEHpEYY8+9hL8NJVgllFBCCSWUUEIJJZRQQgkllFBCCSWUUEIJJZRQQgkllFBCT05s3JXKsQ+oDv6wCf5Pq3KnfBlY3RcDJtHIo8ecuucA2t8HK12jZ92Lb5uK+dfBf+J+Jp9keMj/GzUS3sz00EFNPSSOMo1iLzYUBzIfOnS1sgHmrdgbCC/T+bLE/0IA4Kg6HMxV5xaWJ9uTywvlnIabYApYfBgPdQn/HJCuuaMI4svU4bi4Uo/GSudI6dUSzPsW561761Wu1PXQIQpMaAImcNXdtXlrpzfp3jbwtMa8Z+HvJ7wSfkG9NNOaCKi5VmWatHcXAB8h8RFXVFhu4g0bkxlpKYh8aWYWjqfbU/Wo3XsT50pvF6V5V9YKuqaHOEvXcrpHOFiINF3FCg7VXrdf4aBLb9dquocenZ7xAd1h+SILr/l+KjOlnAun8gQK07Dg9AShtxmNig4MNbdacWmjzI8V3oqL8d5mLeD03MKsP1Bruh4tg5pWnZeAcudvl8OyX1+pVGbjqbK0FrolN7Uhj7oCj4yOC7zA1ioVd0fNLCKjVWeC9SxN6YJdmY8TPNvliTDBHPN1RY/Vl4LzGygWpZa8zdacK+datUnGqpS1kL5E1nutPB6XJusa0XBMm4q8TqIl8jiAycob6iWVkisZwbA16fQ0nskskVvadUkP8Q0UVuJWsFGli86+Cs7NwnMqyRfjvktixFpFZdI5V4UF+4d5myFedmmlRqBi2kLcCj1qVaU74ClOK+f5PNO+oLkPKyNdMQ8HCovKbc16oA5wY5lX/mAhqhSIIlCwKig3pSfeFFC3VFfDA9YUiwdPfilu2vTEkgzWfbBarBK+mom+qp0jbKViVV8NLWgmkFtk1ldxQE2k0xMr9Vv4qklvhMsn1vHRtd0v8plKTtHYmUXlouBq+GejTlhwNKxYNFS4vFygCUJYaZMRd8z5YOlaoXL7IubjsFrKlaJAnlMk06fXwUAoB9nVuCckaJJ4RPeRwWDs+fjrZvR4rDJRN1Tq3jJYrn3XKspaHF9F7naFaSFlJXaTCwYCS/w2hqnkeR+CFTz+qTiGRVrQYrF6G3nDlP+M5+5aBDyJQBoCrECoItkK9liOkekpCSvkvTuwaj8MK7DBs1yK4y6s+ZJKsZoutCJv2PA4Mbd61yImFgtRWMEY7WhMZmL06sS6Jsngyl1Q4aYexFdcWd0y+HocVmsxNxTcYEhWLVQZB98WorGKfgqE6IIX6wH3l6RrpKvkaVFa3KA0rNsVxkmjf+VGnmWyDXUlafRrhG1XsJrZUK91icsD+Jnr5GhrZq5WK0++oZfPROur0cnnfjIvzNVq47zzb+g62yweqxC1vdhXUxRwc3767SsC1kpO+FgyVgDqYhwrTopnUGjJD3IlI+xjjfqmG7kHYRWeesofp9qSL8NwCVFRfOINjw9xoUvKWCpXl92EA3HFMWDAw1VJa3M3IMRXtymEps48ixEcy3qBCNeOPr3K3oJVenHRXYFKYRld88eRQhZ4zlUvMsoS7dkqeIEYnMyWM2WJMq/V/bh8pc3Lh8Gl5U6E7ntOKOXrfpQX4SUsVdSFY4ACNwRqGFzuTGCnpsjmC7FYpacz1UIpIlRpzZcL5bUl+rw8rBjZUCsTKFsS9qWlBYUibynagynSrmOjk4iVc5DGY/7srLSUVs3LzRGsEMZmpl6vLdPdIK8A4HJ8Oa8FfjWd0d+MilVL5Bpy1PLBTLNlPliVWrtpbxgy72SgxRidtyR7r0GyEjlQ1l8Y5DNPqkryY2vmdC9BuCYfX/PwV7DiqplpaqSOzEncpQk5E6KTNEEpDqspNxlan5WPgposY/iqc+UhLdFHJSdfL3OPTmzNHIlbmaTq66/IQ1gqaG4SWiOPbcE9rGQUAMNIrCZWdDeTRR8+8ooeeFdpkEo5Upqna47GatXdgq4prskymlieiiVGycdK5ivwJCRJI4uckhysgHDn09QLWNM8FAlj+h4apqVlu9EqRGGF7KKLB0Ld6TIX49r8SsVNQ7TJgojqjMMq0D90znTWP0FsfSBtMO/qG3FwXc6laCSVEo0VxrBktonVwFCThazokudP4uI5Ny1F1930Uyo5EqaVeHqcH69l5qZn2lmiP++FVc0vvxChgu3rHlaE9X2scKF6Headn2kXJKWk03mnwiqdT6dRr3CiHJxco/PFRUmTkVj5uVUiD2n0dXS3UBEY5tGwWsx5eTOdEc9oOZiTcECAlR5MJ2UT4AOZVwoYCCkxbFuKhqPUlSDZnQeO0yKwqgXrJshOCcHX3JIVX71fWLoHVuhCMpdngT/b9Hp/zmwkVprm62K3zKG5k9/FV3hAjmFRw1clm0QSTCVNMle1QKjgU06cIVhVJM1JLOGUNL/rCWruspHuw1d+LKyan7KEleyqyFgFM/N6le6W+ogMRWFFeQ9HX5Yyt3WSA87Id2aJO1ITnEKwWteD+UgKTsXKhQt4JFvITL0mMhXJV+CMSFjNy9dXR8SKf4yYNxIrrSD5C/BhScp0UpFvFeQ7cwrLhbGakaYjJ0J8hSXN8tR0cyUy1RnCyt265wAT+5ULsMq1lBtUrHDeLJ83HBNFYzVJ/YUpjenR7LBUl++k2ae1CKyWJfVGclkEK9B09fLrdZdL02qmLAYr3w2PxUpj8VhxsQOvMhPMezdWcFOZXtOUSs5KjFTJybdSN3dS4EKwkk0BqbpM+U8W/evqWqiaNgJWmopVMGedLpDuG8K0hdvmDWGFqyURRRq9/sCkUvNVkUshjGaIZyKwkqeL4is+kb7Gi+kPxiqer+LtIPelF26vi0RgpYZq0/IlTCM1YQUr4oyuR8jg3N1Y3VJKDQ1yX6wCcGN1u1ubvi2RHKGvaOQ58SrLCFbEHFdoKwLBalVwI8GqdAdWIAflFlWWPEFLVNbofBXcIB8PsMJmjTIx4jhdWsm4KVjh7pbpLQtKgTaElTQAwaoiGpfisYrSV1o5rWTaXbSkQ+PHCsPTO0oTEVjpskOJK1zJMcp5xCW+DatFPey334EVRL2tGDF4VL5irHCPbHSIrwCLtBrUkkuIrbsNq5bwM0biqxzaIcL6lfbaVKlMmHnsWEGwvarmuGfbr9V5Q1ihvyCpi7autqgRW3crVrlwjHMbVujDSfKPZxfnM0L+7xPjPBwrXZqXM0p6MmpeihUYLmo2X9U0SqjbpT2uugFyFFZLoldKxSrWvwL5L1D5b3rVgEfGSjYzyF1NUUJQ8wwqVoq/sEzZLpSirNyC1aoeaQfjsaJjpyfe5jS3r/SxsaLdUTM5gdTtWGl12Y6nJyr1MFYk9J6ljXwEq6Y2GlbgNpPqZbPu5mW0x+YrTJcHh7FtSXc7mWOx4oEgSavMhbKmCufxWl0MVm81PcoOxvMVHbolN8Q8JlZMaToK0prxWKG/IJ1J84pgmOiGSJ5BD/yJIEdyb6wUs9GWO5MeDyumutfrEiLafBxWjCnRRUaVwNDeaf4qR+5/HREP3ooVDRhIJYDsfbx8BbMo80rjxPkMTE0cz0RBpVWJG1KWT9XV/NVoup12FfjZZvyr5IRHxer22DlLPMqCnG8nnD4VZJq1Om1+WhSlIt1N6HrT5UjctCBjpeZFR/MZaI02yDYz3h5FsPJOjQMrpbiTzspaiWRcXL7iDflK/8JkoVYo8Fye7r7gIQaIErSI3bfcNOD9sSKacNWfEbCKk84xYIUvFMgHl6SrlXkX3NoZzF6N7PZaba7h2zB+wl2pL67LxSliT5rush+Olbtopd9Lfj7j4Ssy76xsUui8k16KWtfUXkFpK+2SlCsmj2FDKsxQxpx3Jff+WBHPbdXP8etYAydNY2PFSilrtuoSVvT9jbabSdcVDJHkhr3KWtardJLiBNpK3d2RRrrjSiPzFYG65RWAsbWiIoeoE2/8N4PGYgeVJj2p6qMo8KWsaAliLNR4rlBlCp8PKjaisBY0v0+m+kY6LjrKRsKKrtm7lPH2K8X4svFhpYfnFYOE/AK3QYfp9Tt68NPuGxFMef7NnNdEgHMGW2pH9sncV1+lfe2AG6woud31cWKltjcJT4m/QqU2zK+7KFLJChHPp2IkrastkMLDQmNFhvaSdw/V7fwVGF4x0MOvB3jhz3j4iqSheCgist/hZm+XocPqSqG0aEN3hVAKcbHlArXea+lKlG02Klb0GYh3VRj2VoYypRtu8DUefVWlg+O7VOBBMfXVrAns0eCezJ1YTbjKTRR6lFZCJnMF8uC08EVGwiqrOC3NDKy5TN/8c2ltfFiBd60M3izDvJnIeV9r98XqVVW8tF1fojY8k6vXZNOQxgZVNipf0XZRTrPNJTEepfTEYn18fKVrsrFKi3lnI8pfmDCto9W/F1YoWDoXN5K6mUi3lB3NuC7qaPkrJXBQdpCW/YbS+PhKMUqhqcmpqQi+irzX7yzPqq3wyr2L1WB5986369EvgUmrkW7IjAurUKNr3OSCyhrhq1CvhU+vsp7vces7FumJBQmS+9cmlFCV0CKxJ1574Hj4irH12BcVXtElLXNzE5LBCMQ8rDSWW1fPydTUH4ZVzFuRSAukSu1FhOPqZ4hXQAtVWYSWxUvS8uVL6/PLU+VyubQwPbniX5sWHfv8SYRfSJFvJ29Sj4BV6EUfMS3QWhCbpbk10keSwTuwwrd80wprpfk/07y+4JXCp5kPrbi4uVauS7njXLU0jS49OgKvsr51w7aDKLZNT9D3C0appcJdWdpL4Y34GnuLK97Xac371Y1x8ZUeUsBCquYxGN3wwJr3UhCCr95M13QRDPv9gPBvzq2/+voK/x/9EwVp8XrBg7DCOcuLEYOucV/X4/xJ3W9xumf/1V1Y6eLlfYWvQOT4T6GU3a/zOe/NEdxSa7oqGnEFSKJnU/ypIVqVXJBT0rWpSHXYKome2IdgxVNVobh0qcQjK+9tiLfSD7Fk5Wh9ORAp8iJDLFbzmnRHJsTRiyW3R2+BjzWTY17/fK6dnsRISDMMZpruYdPEU5Ztw+HM+uKC5kkX4yY+LDATqzX1tywyE96603f3FGG2QvJquRy4SRJgVjwDMbn/4w+MNF36r+noNNU5Ky2HuLtS3yXCqIR/M1U/cT4/4eUCXO7PVQ2NWSYDrCzLNG3bNjlohmHoDvxfy2VNaWj+Ep3H6r5aXCM9kcIKyJDIWp80NGf8UeGOaf8hrKxlvTdc8QlM4pvhwc/P6Fp1fsalybng+WAY5h2fAVkJXjnSqsv+CblvjsNSWJbmrQa/C6Jrk+m38iPiThkzmNN1bMtiiJXNTAMJIIML4CttWsP/stOSUpxd41VoUlREVRDspywNwVgtOFHyU9niTZNCbW6ulCnkhLS7+VH4m5N/REqSdXHeXxpdgnQH/akP+g2vKtRKc3MZXmWQ5+HzBr9lIn5ECHnKsgAeBmiZht0DAujgCtOx4TAdGyfTa2vz7Y2V9vxCQQyjKSug9dhgBbqKqb9gea+6/8tHQnfqTCopSYMTCIkOYNId4TPySuWTlC0w3SGf1HTTNAEk29Qs0z7Y3en3+10HyDa5zuoBVsrYmq/qvQmYsgLx1Xt1yGvwl+4hg8nffVKOyn/HTRFTxkyHYte1mbF7dvJhcHFx+PHjx8N//HJ6/M5hDuBnK1gp4z/S8iPpibFSr9IEVr2ds9N/nHc6qVQeKFUsFjvDj99OtneBIczYQZ4cK9O31M9ALla7l7+cd4pFDlKqmEo1GvkU/O38z44OPGU+0+IIOY6lHfTP9hwDtAVoVbA5tkY16WMTmDtr5+SiA+gAPIIArwZnrtTHbZ3bxidcUBz1AKSdX/95calbXWcTLDUDT8Z2nnBpzNDsvf1hERESQOU5T6UQq1R+uAdYGS8CK4ttWtsfQTWc9kG39nrcqXG6T7g0w+p9+lwsNjhS+QaXwRTnMM5pnT3g95eBFSzD2tlHRXpxvOPYva7JPcAnXIFlfboARSUo1UFKFYXSamzli50z8EQfF6v7KhyD9RyzP8DlHf2+p5tcNzypvrIOrm8QoPOrw4vB/v7pb7+dfvv89aiBEriV/9J5b74UvjKtXtew+p+3gPlvDi+3QXv0us6TYmW+P92/Pvn0aW8bGBudKae7vXc8OMqDtsp/uXlvoM15CVjZFtg/y9r7fNT4UmwMBz92QH84T2miIbABa4wZBdsGb97ixNje5y1QYo3ied94MXaQbW46PXvzHdjso61i6uuvuDYLQ1bMikBk9ti6yz6w+W/Vcj1pY2BjACeZ+vURKqzUFTy8F2IHkRAO6/0/wOygC/jxut+zbLZp2I7GeExm3lv7PYQwfGGWCbxsAjsBh5mGs2Na9kmn2ADr+NeB0bU32UvQ7S5BKL83QHcGHOetn5d9gwf+Jk+MjDzYaGRzTgJXWDNMzMnYNgAHX38gVvni77oBofOTWuY7iOk96x1aQ3SZizefL7kk2iKHBE7YI05tWY4Ds2CIzAx7t7+3bVjAbMhX8OQ6f2waPUDxBWGFqzH2fr9BBwdU6tEQvK1ezzR6IjHymMQsUALM7oFa722f7V9c/NE1wO2zr29S+VS+88OACx5VBEcl24HHZ+3u3xQ7W1sitvh8gpEYAMbzSo9HmNlDY6jbu2e/f2186fzrDFQ5s/9soB9/vgdYwSUvIXZ2CVWrxfTtP4fwLBvFLxi2di4u+7axiTm4x3ysTtcBQ8d2t8++DTsYFB5dolk5GIDH12hc7IDqggVE5a+eiwxQGpu22T05Lxa3tsAcAliNm8PTTzuYUHxMvjIxVnD2LgdDDB5g3q/HoOS1g4/wcaux73Ame1FYMZHUttj3q8bWFsSsGOsXi8Ofv//YBjMEfqLj8Iwb93RcnT8a4Z3oQIFZNZFTeRUCnU/N2bu+GELsV4RZU52/+sDL5tl5I1/cOjq2Ua/bL0kGPYJFvbvYEskRnj/KN4YX1zy7BZ4PiCOuHO06pipHXL/NE2Tonhu8uGUbuo0+wvaPb1fAUg2eDc13Lj7hefuPDjiijav+CwTJJWCgzd39YZGr93yDOxGdm/PBMT5rQ+fWHfOD6FCMbMfBpzUMCBMcXrYxDyAmtrc/nR4OAaYi6MijrVT+5tteF50Icx9d4+I35wVjBfzD7MurFHrwKIl53Eaqc/Tx9HvfsdAbwoLUJvhDoyt8hklEYC4e8OEAB++vL254BgYNCnLW8HoXHLtud/PgsNGBqb/bLyJ7HElgkeye5Zxd3GDiId/YQsBAizQanaOf+8fvdroQbBvGwQG6XSNqLMDXAaPnYAkQJHrn/eXgX0PkX57W457K1fGuZUA0b+tnQ2Dq/PmB9UgbHQPZXRMcrZ7V//MrGqWjlK+4ALhO52pw+X7Xtno2AMpL6qPoLNNEk6cbpm46ez8+XFzddACoLVG44S7dt3cmAoWZWVBXqWJn337BWDEbAlUEa+fkYwe1q0iBF79gfiRf/NLpfP3r+qx/ADwF+tceCSvMbyJL7r4/GVx1OimRLm7k3WIEyN+BBaECMp61M0Az/M9PzkvyFRQyNq2es7kJvgNEPEdcj4Bzmto6aoiiAdahOjdXFx8u3+2CGKJlvB2voF6rocfbP7v+8/BcJImLwi9JcRnPpw4vdyBIBs4D/8Dau4IJi7+A4noCdfXAKZiBKSsDvR5j9/JjJ7+Fbo9wTYsuVvx75/xw8Ofxv/uIWM/mhB6BKdoRxHfPCzPBq+ru9M8uT38BnBpSXQstB8r61tHXX/s2lik14NVuz768gRmH360X5YPGEChf27D39lFUtjCtleeUSkkb7Qy/fv351/719+99DplIbdq4ZU7ocYIK39npvz++Hvy8Gg47Da+shdTh4yFPFYsX37suAwLEjuV8azSKqW875t8AKs2wd7rYtPLvQYNXNcGX32oEYPG6FN9ksdPp/Of88HDwbf/0+vt7Qe8E/Ti5/rA/uDj8z3+w8i7qWMiibhXQHbCYP7r67cCw3Do8sKZl9Q9h6OF309l8wbrdI1DcmHcD5XF5xYGBTaZkpvDNY1GkvMDqA2qNjkLuFfxf8THf8LlT1EyLnV/7FuZFvXI9KMvjGzSCDub9nhuJuwl76tB1BFXrXF4F5Ttvk0IkXW7DP/AhRO7VjaMjFGN5AI85gWePBmemYXd9gwc+g+Xsw5mLPjMeNxs0HjK7WFOFEITbut0PP286HCNffLZctIhYqpRy3VghsBxP3qLgQQifbwbHXdBz3EEVU4OmNHgh/JjpWJV4XiDuQwARdwpNR8ckA+YBqPwJ7eOjUnSlkpBkB8S5hmwdwGgMB98PDAwUWJC1YKZjfB+mhtcAn9P7O2CFkT7mkA2NtyWCo339ecgjaW+7Qi8XUy4onIXyIRKguJ+EEOZd/iyeD35sOz30NeTokrGec33TGezAGjC18aww3JvkPALIyfbJXzx6y7tqueFj1khFE0Gt4ZoCAWljeHj6jneYqBoJ1FXv5OOHHfRiX1RF4r5kO8wyDvrv//w5bPCWDJeZthqNVIpq7DBigaTmRRox1TkfnGx3nQPMIahYYex0ALH5S6pGjERgEDGWM+z+8b5nFVG2UsQ8xlFHNDVyPY+51sPf/n0AEi7yrCFLhxNhNvFZNjoGEoFLr4epq3fXgyvuGHFPCdXUVj6fSvnaicigK69CQaXyYN4uMBEGgoYVQdTnIRmEgMHCmZ5lo+Mg9LXAf7B53n333R+/f8SaSzHvBb75wKGg+iqV8jyrBore9ac+tvsLJ4F3Uas6CSJK64k7dcZP6J5aWFsFB1XT+99Pf/knOuapW4QQsQJXHj3Oo6uL05O9Lr5DYvNkO7dwyK/KNFwAsdL2HHscB4EAmhCwYRYBO2cMsPO6vdP/8WGfZ+xilBY/CHhe/Rxc/9jbZZjpAcAdU7yjxKPsUELE5qdfUv/CiIRYmbwAgyUqnuWzQFJs09nZO7u8HhweXp3fdLCakPf5rNMZDq8uBqcA047NHTV0OcGz7fE2S5GPCHMPYoVN5M+wy0clb0vObv/d2fHl9fXp/v63b79829/f/3B9eXx8ttff1bz3Af+2QjUe8jJVmMzEd41QZ+N7NN0ujyMNUQf8f8cioxP3q7kcmY5zgI2U6AdgdtTgR0GjuQnT517piyFet2eit403J/gdnyY6GcyIfO3ov5fQEbBt4X7ZvLrDez95m5tl/Q3SdU9IXDUJ/cQ/8bdv+ft8Jr4x+dzLe1Fkcn/I1V/o2bsuhimiyOde3osi2dJxuLxKTuIsJJRQQqNQojHuogCeBKr7U4LV/SnBKqGEEkoooYQSSiihhBJK6L+JkhgwoYQS+tvQ/wIJWYl2SOkEngAAAABJRU5ErkJggg==" alt =""></img>
            </Link>

           <div className="login-container">
              <h1>Sign In</h1>

              <form>
                 <h5>E-mail</h5>
                 <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>

                 <h5>Password</h5>
                 <input type="text" value={password} onChange={e=>setPassword(e.target.value)}></input>

                 <button className="login-signin" type="submit" onClick={signIn}><h4>Sign In</h4></button>
              </form>

             <p>By signing-in you agree to the AMAZON FAKE CLONE 
             Conditions of Use & Sale.Please see our Privacy Notice,
              our Cookies Notice and our Interest-Based Ads Notice.
             </p> 

             <button className="login-registerbutton" onClick={register}>Create your amazon account</button>
           </div> 
        </div>
    )
}

export default LoginPage
