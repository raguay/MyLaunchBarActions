FasdUAS 1.101.10   ��   ��    k             j     �� �� 0 ptitle pTitle  m        � 	 	 N R e g i s t e r   a n d   h a n d l e   f t d o c : / /   u r l   s c h e m e   
  
 j    �� �� 0 pver pVer  m       �    0 . 0 3      j    �� �� 0 pauthor pAuthor  m       �    R o b   T r e w      j   	 �� �� 0 pdescription pDescription  m   	 
   �  : 
 
 	 U s e   i n   c o n j u n c t i o n   w i t h   t h e   ' F T C o p y A s U R L '   A p p l e s c r i p t   t o   g e t 
 	 a   U R L   w h i c h   o p e n s   t h e   s p e c i f i e d   d o c u m e n t ,   o p t i o n a l l y   r e s t o r i n g   s e l e c t i o n   a n d   f i l t e r   s t a t e . 
 
      l     ��������  ��  ��        l     ��  ��    Q K Registers the url-scheme ftdoc://encoded-file-path with optional switches:     �   �   R e g i s t e r s   t h e   u r l - s c h e m e   f t d o c : / / e n c o d e d - f i l e - p a t h   w i t h   o p t i o n a l   s w i t c h e s :     !   l     �� " #��   " ; 5[?nodepath=//@due] -- nodepath used to apply a filter    # � $ $ j [ ? n o d e p a t h = / / @ d u e ]   - -   n o d e p a t h   u s e d   t o   a p p l y   a   f i l t e r !  % & % l     �� ' (��   ' : 4[?selnpath=] -- nodepath used to specify a selection    ( � ) ) h [ ? s e l n p a t h = ]   - -   n o d e p a t h   u s e d   t o   s p e c i f y   a   s e l e c t i o n &  * + * l     �� , -��   , % [?find=] -- text string to find    - � . . > [ ? f i n d = ]   - -   t e x t   s t r i n g   t o   f i n d +  / 0 / l     �� 1 2��   1 . ([?line=N][?startoffset=0][?endoffset=-1]    2 � 3 3 P [ ? l i n e = N ] [ ? s t a r t o f f s e t = 0 ] [ ? e n d o f f s e t = - 1 ] 0  4 5 4 l     ��������  ��  ��   5  6 7 6 l     �� 8 9��   8 1 + where line is zero-based and defaults to 0    9 � : : V   w h e r e   l i n e   i s   z e r o - b a s e d   a n d   d e f a u l t s   t o   0 7  ; < ; l     �� = >��   = T N startoffset is an offset of a number of characters from the start of the line    > � ? ? �   s t a r t o f f s e t   i s   a n   o f f s e t   o f   a   n u m b e r   o f   c h a r a c t e r s   f r o m   t h e   s t a r t   o f   t h e   l i n e <  @ A @ l     �� B C��   B   endoffset is ditto    C � D D &   e n d o f f s e t   i s   d i t t o A  E F E l     ��������  ��  ��   F  G H G l     �� I J��   I 5 / and the url opens the document in FoldingText:    J � K K ^   a n d   t h e   u r l   o p e n s   t h e   d o c u m e n t   i n   F o l d i n g T e x t : H  L M L l     �� N O��   N = 7 1. Applying any specified ?nodepath= value as a filter    O � P P n   1 .   A p p l y i n g   a n y   s p e c i f i e d   ? n o d e p a t h =   v a l u e   a s   a   f i l t e r M  Q R Q l     �� S T��   S H B 2. Selecting the first line that matches (in the following order)    T � U U �   2 .   S e l e c t i n g   t h e   f i r s t   l i n e   t h a t   m a t c h e s   ( i n   t h e   f o l l o w i n g   o r d e r ) R  V W V l     �� X Y��   X 2 ,	--	the value of ?selnpath= ?find= or ?line=    Y � Z Z X 	 - - 	 t h e   v a l u e   o f   ? s e l n p a t h =   ? f i n d =   o r   ? l i n e = W  [ \ [ l     �� ] ^��   ] o i 3. Restricts the selection to a subset of a line selected by number if startoffset > 0 or endoffset � -1    ^ � _ _ �   3 .   R e s t r i c t s   t h e   s e l e c t i o n   t o   a   s u b s e t   o f   a   l i n e   s e l e c t e d   b y   n u m b e r   i f   s t a r t o f f s e t   >   0   o r   e n d o f f s e t  "`   - 1 \  ` a ` l     ��������  ��  ��   a  b c b l     �� d e��   d o i for the approach to registering and handling a url with an applescript.app and the .plist in its bundle,    e � f f �   f o r   t h e   a p p r o a c h   t o   r e g i s t e r i n g   a n d   h a n d l i n g   a   u r l   w i t h   a n   a p p l e s c r i p t . a p p   a n d   t h e   . p l i s t   i n   i t s   b u n d l e , c  g h g l     �� i j��   i C = see http://www.macosxautomation.com/applescript/linktrigger/    j � k k z   s e e   h t t p : / / w w w . m a c o s x a u t o m a t i o n . c o m / a p p l e s c r i p t / l i n k t r i g g e r / h  l m l l     ��������  ��  ��   m  n o n j    �� p�� 0 
pinodepath 
piNodePath p m    ����  o  q r q j    �� s�� 0 
piselnpath 
piSelnPath s m    ����  r  t u t j    �� v�� 0 
pifindtext 
piFindText v m    ����  u  w x w j    �� y�� 0 piline piLine y m    ����  x  z { z j    �� |�� 0 pistartoffset piStartOffset | m    ����  {  } ~ } j    �� �� 0 piendoffset piEndOffset  m    ����  ~  � � � l     ��������  ��  ��   �  � � � j    3�� ��� 0 plstkeys plstKeys � J    2 � �  � � � m    ! � � � � �  n o d e p a t h �  � � � m   ! $ � � � � �  s e l n p a t h �  � � � m   $ ' � � � � �  f i n d �  � � � m   ' * � � � � �  l i n e �  � � � m   * - � � � � �  s t a r t o f f s e t �  ��� � m   - 0 � � � � �  e n d o f f s e t��   �  � � � j   4 ;�� ��� 0 plngkeys plngKeys � n   4 : � � � 1   5 9��
�� 
leng � o   4 5���� 0 plstkeys plstKeys �  � � � l     ��������  ��  ��   �  � � � j   < @�� ��� 0 	pjsselect 	pjsSelect � m   < ? � � � � �� 
 
 f u n c t i o n ( e d i t o r ,   o p t i o n s )   { 
 	 f u n c t i o n   g e t V a l u e ( s t r S w i t c h )   { 
 	 	 r e t u r n   l s t S w i t c h e s [ l s t S w i t c h e s . i n d e x O f ( ' ? '   +   s t r S w i t c h   +   ' = ' ) + 1 ] ; 
 	 } 
 	 
 	 v a r 	 t r e e =   e d i t o r . t r e e ( ) , 
 	 	 o N o d e ,   r n g S e l n , 
 	 	 / / o p t i o n s . f i l e p a t h ,   o p t i o n s . s w i t c h e s ,   o p t i o n s . k e y s 
 	 	 l s t K e y s   =   o p t i o n s . k e y s , 
 	 	 s t r R e g e x   =   ' ( \ \ ? '   +   l s t K e y s . j o i n ( ' = | \ \ ? ' )   +   ' = ) ' , 
 	 	 o R e g e x   =   n e w   R e g E x p ( s t r R e g e x ,   ' g ' ) , 
 	 	 s t r P a t h   =   d e c o d e U R I C o m p o n e n t ( o p t i o n s . f i l e p a t h ) ,   
 	 	 s t r S w i t c h e s   =   d e c o d e U R I C o m p o n e n t ( o p t i o n s . s w i t c h e s ) , 
 	 	 l s t S w i t c h e s   =   s t r S w i t c h e s . s p l i t ( o R e g e x ) , 
 	 	 s t r P a t h ,   s t r L i n e N u m , 
 	 	 s t r S e l n P a t h , 
 	 	 s t r F i n d , 
 	 	 s t r S t a r t O f f s e t ,   s t r E n d O f f s e t , 
 	 	 l n g L i n e ,   l n g S t a r t O f f s e t = 0 ,   l n g E n d O f f s e t = - 1 , 
 	 	 v a r S t a r t O f f s e t ,   v a r E n d O f f s e t , 
 	 	 l s t M a t c h e s = [ ] ,   l s t R a n g e s = [ ] ,   i ; 
 	 	 
 	 
 	 / /   T r y   t o   r e s t o r e   a n y   s e l e c t i o n   t h a t   i s   s p e c i f i e d 
 	 i f   ( s t r P a t h   =   g e t V a l u e ( ' n o d e p a t h ' ) )   { 
 	 	 / / r e s t o r e   a n y   f i l t e r 
 	 	 e d i t o r . s e t N o d e P a t h ( s t r P a t h ) ; 
 	 } 
 	 	 
 	 
 	 s t r S e l n P a t h   =   g e t V a l u e ( ' s e l n p a t h ' ) ; 
 	 s t r F i n d   =   g e t V a l u e ( ' f i n d ' ) ; 
 	 
 	 i f   ( s t r S e l n P a t h   | |   s t r F i n d )   { 
 	 	 i f   ( s t r S e l n P a t h )   { 
 	 	 	 l s t M a t c h e s   =   t r e e . e v a l u a t e N o d e P a t h ( s t r S e l n P a t h ) ; 
 	 	 } 
 	 	 i f   ( s t r F i n d   & &   ( l s t M a t c h e s . l e n g t h   = =   0 ) )   { 
 	 	 	 l s t M a t c h e s   =   t r e e . e v a l u a t e N o d e P a t h ( ' / / " '   +   s t r F i n d   +   ' " ' ) ; 
 	 	 } 
 	 	 i f   ( l s t M a t c h e s . l e n g t h )   { 
 	 	 	 l s t M a t c h e s . f o r E a c h ( f u n c t i o n ( v a r N o d e )   { 
 	 	 	 	 l s t R a n g e s . p u s h ( t r e e . c r e a t e R a n g e F r o m N o d e s ( 
 	 	 	 	 	 v a r N o d e ,   0 ,   v a r N o d e ,   - 1 ) ) ; 
 	 	 	 	 / /   u n f o l d   i f   t h i s   r a n g e   i s   h i d d e n 
 	 	 	 	 i f   ( e d i t o r . n o d e I s H i d d e n I n F o l d ( v a r N o d e ) )   { 
 	 	 	 	 	 e d i t o r . e x p a n d T o R e v e a l N o d e ( v a r N o d e ) ; 
 	 	 	 	 } 
 	 	 	 } ) ; 
 	 	 	 e d i t o r . s e t S e l e c t e d R a n g e s ( l s t R a n g e s ) ; 
 	 	 	 / / M a k e   s u r e   t h a t   a t   l e a s t   t h e   f i r s t   o f   a n y   s e l e c t i o n s   i s   v i s i b l e 
 	 	 	 e d i t o r . s c r o l l R a n g e T o V i s i b l e ( l s t R a n g e s [ 0 ] ) ; 
 	 	 } 
 	 }   e l s e   { 
 	 	 
 	 	 / /   m a k e   a n y   s e l e c t i o n   s p e c i f i e d   b y   l i n e   n u m b e r   e t c 
 	 	 i f   ( s t r L i n e   =   g e t V a l u e ( ' l i n e ' ) )   { 
 	 	 	 l n g L i n e   =   p a r s e I n t ( s t r L i n e ,   1 0 ) ; 
 	 	 	 i f   ( ! ( i s N a N ( l n g L i n e ) ) )   { 
 	 	 	 	 o N o d e   =   t r e e . l i n e N u m b e r T o N o d e ( l n g L i n e ) ; 
 	 	 	 	 i f   ( e d i t o r . n o d e I s H i d d e n I n F o l d ( o N o d e ) )   { 
 	 	 	 	 	 e d i t o r . e x p a n d T o R e v e a l N o d e ( o N o d e ) ; 
 	 	 	 	 	 e d i t o r . s c r o l l T o L i n e ( l n g L i n e ) ; 
 	 	 	 	 } 
 	 	 
 	 	 	 	 i f   ( s t r S t a r t O f f s e t   =   g e t V a l u e ( ' s t a r t o f f s e t ' ) )   { 
 	 	 	 	 	 v a r S t a r t O f f s e t   =   p a r s e I n t ( s t r S t a r t O f f s e t ,   1 0 ) ; 
 	 	 	 	 	 i f   ( ! i s N a N ( v a r S t a r t O f f s e t ) )   { 
 	 	 	 	 	 	 l n g S t a r t O f f s e t   =   v a r S t a r t O f f s e t ; 
 	 	 	 	 	 } 
 	 	 	 	 } 
 	 	 
 	 	 	 	 i f   ( s t r E n d O f f s e t   =   g e t V a l u e ( ' e n d o f f s e t ' ) )   { 
 	 	 	 	 	 v a r E n d O f f s e t   =   p a r s e I n t ( s t r E n d O f f s e t ,   1 0 ) ; 
 	 	 	 	 	 i f   ( ! i s N a N ( v a r E n d O f f s e t ) )   { 
 	 	 	 	 	 	 l n g E n d O f f s e t   =   v a r E n d O f f s e t ; 
 	 	 	 	 	 } 
 	 	 	 	 } 
 
 	 	 	 	 r n g S e l n   =   t r e e . c r e a t e R a n g e F r o m N o d e s ( 
 	 	 	 	 	 o N o d e ,   l n g S t a r t O f f s e t ,   o N o d e ,   l n g E n d O f f s e t ) ; 
 	 	 	 	 e d i t o r . s e t S e l e c t e d R a n g e ( r n g S e l n ) ; 
 	 	 	 } 
 	 	 } 
 	 } 
 } 
 �  � � � l     ��������  ��  ��   �  � � � i   A D � � � I     �� ���
�� .GURLGURLnull��� ��� TEXT � o      ���� 0 strurl strURL��   � k     N � �  � � � r      � � � I     �� ����� "0 pathandswitches pathAndSwitches �  ��� � o    ���� 0 strurl strURL��  ��   � o      ���� 0 recparse recParse �  ��� � Z   	 N � ����� � >  	  � � � o   	 
���� 0 recparse recParse � m   
 ��
�� 
msng � k    J � �  � � � r     � � � I    �� ����� 0 	urldecode   �  ��� � n     � � � o    ���� 0 filepath   � o    ���� 0 recparse recParse��  ��   � o      ���� 0 strpath strPath �  � � � l   ��������  ��  ��   �  ��� � O    J � � � k    I � �  � � � r    % � � � l   # ����� � I   #�� ���
�� .aevtodocnull  �    alis � o    ���� 0 strpath strPath��  ��  ��   � o      ���� 0 odoc oDoc �  � � � O   & C � � � r   * B � � � l  * @ ����� � I  * @���� �
�� .FTsuevjSnull���     docu��   � �� � �
�� 
FTjs � o   , 1���� 0 	pjsselect 	pjsSelect � �� ���
�� 
FTop � l  2 < ����� � b   2 < � � � o   2 3���� 0 recparse recParse � K   3 ; � � �� ����� 0 keys   � o   4 9���� 0 plstkeys plstKeys��  ��  ��  ��  ��  ��   � o      ���� 0 	varresult 	varResult � o   & '���� 0 odoc oDoc �  ��� � I  D I������
�� .miscactvnull��� ��� null��  ��  ��   � m     � ��                                                                                      @ alis    6  Macintosh HD                   BD ����FoldingText.app                                                ����            ����  
 cu             Applications  /:Applications:FoldingText.app/      F o l d i n g T e x t . a p p    M a c i n t o s h   H D  Applications/FoldingText.app  / ��  ��  ��  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   �  on getDoc(strPath)    � � � � $ o n   g e t D o c ( s t r P a t h ) �  � � � l     �� � ���   � % 	tell application "FoldingText"    � � � � > 	 t e l l   a p p l i c a t i o n   " F o l d i n g T e x t " �  � � � l     �� � ���   �  		set lstDoc to documents    � � � � 2 	 	 s e t   l s t D o c   t o   d o c u m e n t s �  � � � l     �� � ���   � " 		repeat with oDoc in lstDoc    � � � � 8 	 	 r e p e a t   w i t h   o D o c   i n   l s t D o c �  � � � l     �� � ���   � " 			set oFile to file of oDoc    � � � � 8 	 	 	 s e t   o F i l e   t o   f i l e   o f   o D o c �  � � � l     �� ��    + %			if oFile is not missing value then    � J 	 	 	 i f   o F i l e   i s   n o t   m i s s i n g   v a l u e   t h e n �  l     ����   > 8				if (POSIX path of ((oFile) as alias)) = strPath then    � p 	 	 	 	 i f   ( P O S I X   p a t h   o f   ( ( o F i l e )   a s   a l i a s ) )   =   s t r P a t h   t h e n 	 l     ��
��  
  					activate    �  	 	 	 	 	 a c t i v a t e	  l     ����    					return oDoc    �   	 	 	 	 	 r e t u r n   o D o c  l     ����    
				end if    �  	 	 	 	 e n d   i f  l     ����    				end if    �  	 	 	 e n d   i f  l     ����    		end repeat    �    	 	 e n d   r e p e a t !"! l     ��#$��  # " 		set oDoc to (open strPath)   $ �%% 8 	 	 s e t   o D o c   t o   ( o p e n   s t r P a t h )" &'& l     ��()��  (  
		activate   ) �**  	 	 a c t i v a t e' +,+ l     �-.�  -  		return oDoc   . �//  	 	 r e t u r n   o D o c, 010 l     �~23�~  2  		end tell   3 �44  	 e n d   t e l l1 565 l     �}78�}  7  
end getDoc   8 �99  e n d   g e t D o c6 :;: l     �|�{�z�|  �{  �z  ; <=< i   E H>?> I      �y@�x�y "0 pathandswitches pathAndSwitches@ A�wA o      �v�v 0 strurl strURL�w  �x  ? k     �BB CDC l     �uEF�u  E C = we can't simply split on '?' as there may be '?' in the text   F �GG z   w e   c a n ' t   s i m p l y   s p l i t   o n   ' ? '   a s   t h e r e   m a y   b e   ' ? '   i n   t h e   t e x tD HIH l     �tJK�t  J D > extracting the file in .js would require an active document,    K �LL |   e x t r a c t i n g   t h e   f i l e   i n   . j s   w o u l d   r e q u i r e   a n   a c t i v e   d o c u m e n t ,  I MNM l     �sOP�s  O P J so we do it here to save the time and distraction caused by creating one    P �QQ �   s o   w e   d o   i t   h e r e   t o   s a v e   t h e   t i m e   a n d   d i s t r a c t i o n   c a u s e d   b y   c r e a t i n g   o n e  N RSR r     TUT J     VV WXW n    YZY 1    �r
�r 
txdlZ  f     X [�q[ m    \\ �]]  f t d o c : / /�q  U J      ^^ _`_ o      �p�p 0 dlm  ` a�oa n     bcb 1    �n
�n 
txdlc  f    �o  S ded r    fgf n    hih 2   �m
�m 
citmi o    �l�l 0 strurl strURLg o      �k�k 0 lstparts lstPartse jkj Z    �lm�jnl A    #opo n    !qrq 1    !�i
�i 
lengr o    �h�h 0 lstparts lstPartsp m   ! "�g�g m r   & )sts m   & '�f
�f 
msngt o      �e�e 0 varparse varParse�j  n k   , �uu vwv r   , 2xyx n   , 0z{z 4   - 0�d|
�d 
cobj| m   . /�c�c { o   , -�b�b 0 lstparts lstPartsy o      �a�a 0 	strtarget 	strTargetw }~} r   3 8� n   3 6��� 1   4 6�`
�` 
leng� o   3 4�_�_ 0 	strtarget 	strTarget� o      �^�^ 0 
lngclosest 
lngClosest~ ��� X   9 ���]�� k   M �� ��� r   M V��� l  M R��\�[� b   M R��� b   M P��� m   M N�� ���  ?� o   N O�Z�Z 0 varkey varKey� m   P Q�� ���  =�\  �[  � n     ��� 1   S U�Y
�Y 
txdl�  f   R S� ��� r   W \��� n   W Z��� 2  X Z�X
�X 
citm� o   W X�W�W 0 	strtarget 	strTarget� o      �V�V 0 lstparts lstParts� ��U� Z   ] ���T�S� ?   ] b��� n   ] `��� 1   ^ `�R
�R 
leng� o   ] ^�Q�Q 0 lstparts lstParts� m   ` a�P�P � k   e {�� ��� r   e m��� n   e k��� 1   i k�O
�O 
leng� n   e i��� 4   f i�N�
�N 
cobj� m   g h�M�M � o   e f�L�L 0 lstparts lstParts� o      �K�K 0 lngposn lngPosn� ��J� Z  n {���I�H� A   n q��� o   n o�G�G 0 lngposn lngPosn� o   o p�F�F 0 
lngclosest 
lngClosest� r   t w��� o   t u�E�E 0 lngposn lngPosn� o      �D�D 0 
lngclosest 
lngClosest�I  �H  �J  �T  �S  �U  �] 0 varkey varKey� o   < A�C�C 0 plstkeys plstKeys� ��� r   � ���� n   � ���� 7  � ��B��
�B 
ctxt� m   � ��A�A � o   � ��@�@ 0 
lngclosest 
lngClosest� o   � ��?�? 0 	strtarget 	strTarget� o      �>�> 0 strpath strPath� ��� r   � ���� n   � ���� 7  � ��=��
�= 
ctxt� l  � ���<�;� [   � ���� o   � ��:�: 0 
lngclosest 
lngClosest� m   � ��9�9 �<  �;  � m   � ��8�8��� o   � ��7�7 0 	strtarget 	strTarget� o      �6�6 0 strswitches strSwitches� ��5� r   � ���� K   � ��� �4���4 0 filepath  � o   � ��3�3 0 strpath strPath� �2��1�2 0 switches  � o   � ��0�0 0 strswitches strSwitches�1  � o      �/�/ 0 varparse varParse�5  k ��� r   � ���� o   � ��.�. 0 dlm  � n     ��� 1   � ��-
�- 
txdl�  f   � �� ��,� L   � ��� o   � ��+�+ 0 varparse varParse�,  = ��� l     �*�)�(�*  �)  �(  � ��� l     �'���'  � D > based on http://harvey.nu/applescript_url_decode_routine.html   � ��� |   b a s e d   o n   h t t p : / / h a r v e y . n u / a p p l e s c r i p t _ u r l _ d e c o d e _ r o u t i n e . h t m l� ��� i   I L��� I      �&��%�& 0 	urldecode  � ��$� o      �#�# 0 thetext theText�$  �%  � k    �� ��� r     ��� m     �� ���  � o      �"�" 0 sdst sDst� ��� r    ��� m    �� ���   0 1 2 3 4 5 6 7 8 9 A B C D E F� o      �!�! 0 shex sHex� ��� r    ��� m    	� �  � o      �� 0 i  � ��� V   ��� k   �� ��� r    ��� n    ��� 4    � 
� 
cha   o    �� 0 i  � o    �� 0 thetext theText� o      �� 0 c  �  Z    =      o    �� 0 c   m    		 �

  + r   # ( b   # & o   # $�� 0 sdst sDst m   $ % �    o      �� 0 sdst sDst  =   + . o   + ,�� 0 c   m   , - �  % � k   1 �  Z   1 j�� ?   1 8 o   1 2�� 0 i   l  2 7�� \   2 7 !  l  2 5"��" n   2 5#$# 1   3 5�
� 
leng$ o   2 3�� 0 thetext theText�  �  ! m   5 6�� �  �   k   ; f%% &'& O   ; a()( k   ? `** +,+ I  ? D��
�	
� .miscactvnull��� ��� null�
  �	  , -�- I  E `�./
� .sysodlogaskr        TEXT. l  E F0��0 m   E F11 �22 Z I n v a l i d   U R L   E n c o d e d   s t r i n g   -   m i s s i n g   h e x   c h a r�  �  / �34
� 
btns3 J   G J55 6�6 m   G H77 �88  O K�  4 �9:
� 
dflt9 m   K L;; �<<  O K: �=� 
� 
appr= b   M Z>?> b   M T@A@ o   M R���� 0 ptitle pTitleA m   R SBB �CC      v e r .  ? o   T Y���� 0 pver pVer�   �  ) m   ; <DD�                                                                                  sevs  alis    \  Macintosh HD                   BD ����System Events.app                                              ����            ����  
 cu             CoreServices  0/:System:Library:CoreServices:System Events.app/  $  S y s t e m   E v e n t s . a p p    M a c i n t o s h   H D  -System/Library/CoreServices/System Events.app   / ��  ' E��E L   b fFF m   b eGG �HH  ��  �  �   IJI r   k �KLK \   k �MNM l  k O����O I  k ����P
�� .sysooffslong    ��� null��  P ��QR
�� 
psofQ l  o uS����S n   o uTUT 4   p u��V
�� 
cha V l  q tW����W [   q tXYX o   q r���� 0 i  Y m   r s���� ��  ��  U o   o p���� 0 thetext theText��  ��  R ��Z��
�� 
psinZ o   x y���� 0 shex sHex��  ��  ��  N m    ����� L o      ���� 0 icval1 iCVal1J [\[ r   � �]^] \   � �_`_ l  � �a����a I  � �����b
�� .sysooffslong    ��� null��  b ��cd
�� 
psofc l  � �e����e n   � �fgf 4   � ���h
�� 
cha h l  � �i����i [   � �jkj o   � ����� 0 i  k m   � ����� ��  ��  g o   � ����� 0 thetext theText��  ��  d ��l��
�� 
psinl o   � ����� 0 shex sHex��  ��  ��  ` m   � ����� ^ o      ���� 0 icval2 iCVal2\ mnm Z   � �op����o G   � �qrq =   � �sts o   � ����� 0 icval1 iCVal1t m   � �������r =   � �uvu o   � ����� 0 icval2 iCVal2v m   � �������p k   � �ww xyx O   � �z{z k   � �|| }~} I  � �������
�� .miscactvnull��� ��� null��  ��  ~ �� I  � �����
�� .sysodlogaskr        TEXT� l  � ������� m   � ��� ��� r I n v a l i d   U R L   E n c o d e d   s t r i n g   -   n o t   2   h e x   c h a r s   a f t e r   %   s i g n��  ��  � ����
�� 
btns� J   � ��� ���� m   � ��� ���  O K��  � ����
�� 
dflt� m   � ��� ���  O K� �����
�� 
appr� b   � ���� b   � ���� o   � ����� 0 ptitle pTitle� m   � ��� ���      v e r .  � o   � ����� 0 pver pVer��  ��  { m   � ����                                                                                  sevs  alis    \  Macintosh HD                   BD ����System Events.app                                              ����            ����  
 cu             CoreServices  0/:System:Library:CoreServices:System Events.app/  $  S y s t e m   E v e n t s . a p p    M a c i n t o s h   H D  -System/Library/CoreServices/System Events.app   / ��  y ���� L   � ��� m   � ��� ���  ��  ��  ��  n ��� r   � ���� b   � ���� o   � ����� 0 sdst sDst� l  � ������� I  � ������
�� .sysontocTEXT       shor� l  � ������� [   � ���� ]   � ���� o   � ����� 0 icval1 iCVal1� m   � ����� � o   � ����� 0 icval2 iCVal2��  ��  ��  ��  ��  � o      ���� 0 sdst sDst� ���� r   � ���� [   � ���� o   � ����� 0 i  � m   � ����� � o      ���� 0 i  ��  �   r   ���� b   � ��� o   � ����� 0 sdst sDst� o   � ����� 0 c  � o      ���� 0 sdst sDst ���� r  ��� [  ��� o  ���� 0 i  � m  ���� � o      ���� 0 i  ��  � B    ��� o    ���� 0 i  � n    ��� 1    ��
�� 
leng� o    ���� 0 thetext theText� ���� L  �� o  ���� 0 sdst sDst��  � ��� l     ��������  ��  ��  � ��� l     ��������  ��  ��  � ��� l     ������  � \ V "ftdoc://encoded-file-path[?nodepath=//@due][?line=N][?startoffset=0][?endoffset=-1]"   � ��� �   " f t d o c : / / e n c o d e d - f i l e - p a t h [ ? n o d e p a t h = / / @ d u e ] [ ? l i n e = N ] [ ? s t a r t o f f s e t = 0 ] [ ? e n d o f f s e t = - 1 ] "� ��� l     ��������  ��  ��  � ���� l     ��������  ��  ��  ��       ���    ��������������� ������  � ���������������������������������� 0 ptitle pTitle�� 0 pver pVer�� 0 pauthor pAuthor�� 0 pdescription pDescription�� 0 
pinodepath 
piNodePath�� 0 
piselnpath 
piSelnPath�� 0 
pifindtext 
piFindText�� 0 piline piLine�� 0 pistartoffset piStartOffset�� 0 piendoffset piEndOffset�� 0 plstkeys plstKeys�� 0 plngkeys plngKeys�� 0 	pjsselect 	pjsSelect
�� .GURLGURLnull��� ��� TEXT�� "0 pathandswitches pathAndSwitches�� 0 	urldecode  �� �� �� �� �� �� � ����� �   � � � � � ��� � �� �������~
�� .GURLGURLnull��� ��� TEXT�� 0 strurl strURL�  � �}�|�{�z�y�} 0 strurl strURL�| 0 recparse recParse�{ 0 strpath strPath�z 0 odoc oDoc�y 0 	varresult 	varResult� �x�w�v�u ��t�s�r�q�p�o�n�x "0 pathandswitches pathAndSwitches
�w 
msng�v 0 filepath  �u 0 	urldecode  
�t .aevtodocnull  �    alis
�s 
FTjs
�r 
FTop�q 0 keys  �p 
�o .FTsuevjSnull���     docu
�n .miscactvnull��� ��� null�~ O*�k+  E�O�� @*��,k+ E�O� -�j E�O� *�b  ��b  
l%� 
E�UO*j UY h� �m?�l�k���j�m "0 pathandswitches pathAndSwitches�l �i��i �  �h�h 0 strurl strURL�k  � 
�g�f�e�d�c�b�a�`�_�^�g 0 strurl strURL�f 0 dlm  �e 0 lstparts lstParts�d 0 varparse varParse�c 0 	strtarget 	strTarget�b 0 
lngclosest 
lngClosest�a 0 varkey varKey�` 0 lngposn lngPosn�_ 0 strpath strPath�^ 0 strswitches strSwitches� �]\�\�[�Z�Y�X�W���V�U�T�S
�] 
txdl
�\ 
cobj
�[ 
citm
�Z 
leng
�Y 
msng
�X 
kocl
�W .corecnte****       ****
�V 
ctxt�U 0 filepath  �T 0 switches  �S �j �)�,�lvE[�k/E�Z[�l/)�,FZO��-E�O��,l �E�Y ���l/E�O��,E�O Jb  
[��l kh �%�%)�,FO��-E�O��,k ��k/�,E�O�� �E�Y hY h[OY��O�[�\[Zk\Z�2E�O�[�\[Z�k\Zi2E�O���E�O�)�,FO�� �R��Q�P���O�R 0 	urldecode  �Q �N��N �  �M�M 0 thetext theText�P  � �L�K�J�I�H�G�F�L 0 thetext theText�K 0 sdst sDst�J 0 shex sHex�I 0 i  �H 0 c  �G 0 icval1 iCVal1�F 0 icval2 iCVal2� ���E�D	D�C1�B7�A;�@B�?�>G�=�<�;�:�9������8�7
�E 
leng
�D 
cha 
�C .miscactvnull��� ��� null
�B 
btns
�A 
dflt
�@ 
appr�? 
�> .sysodlogaskr        TEXT
�= 
psof
�< 
psin�; 
�: .sysooffslong    ��� null
�9 
bool�8 
�7 .sysontocTEXT       shor�O�E�O�E�OkE�O h���,��/E�O��  
��%E�Y ٤�  Σ��,l 0� #*j O���kv���b   �%b  %a  UOa Y hO*a ��k/a �a  kE�O*a ��l/a �a  kE�O�i 
 	�i a & 8� +*j Oa �a kv�a �b   a %b  %a  UOa Y hO��a  �j %E�O�lE�Y ��%E�O�kE�[OY�O�ascr  ��ޭ